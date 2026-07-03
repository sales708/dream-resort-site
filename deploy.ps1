# Build and package the site for production upload.
param(
  [string]$FtpHost,
  [string]$FtpUser,
  [string]$FtpPass,
  [string]$RemotePath = "/public_html",
  [switch]$Upload
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$dist = Join-Path $root "dist"
$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$zipName = "dream-resort-site-$stamp.zip"

Write-Host "Building single-file HTML..."
& (Join-Path $root "build-all.ps1")

if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null

$excludeNames = @(
  "dist",
  ".git",
  "preview-server.ps1",
  "export-all-source.ps1",
  "deploy.ps1",
  "build-all.ps1",
  "build-single.ps1",
  "deploy.config.json",
  "ALL-SOURCE-CODE.txt",
  "_terms-body.html"
)

$excludePatterns = @(
  "*-single.html"
)

function Should-Copy([string]$relativePath) {
  $name = Split-Path $relativePath -Leaf
  if ($excludeNames -contains $name) { return $false }
  foreach ($pat in $excludePatterns) {
    if ($name -like $pat) { return $false }
  }
  return $true
}

Get-ChildItem $root -Recurse -File | ForEach-Object {
  $rel = $_.FullName.Substring($root.Length + 1)
  if ($rel.StartsWith("dist\") -or $rel.StartsWith("dist/")) { return }
  if (-not (Should-Copy $rel)) { return }
  $dest = Join-Path $dist $rel
  $destDir = Split-Path $dest -Parent
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
  Copy-Item $_.FullName $dest -Force
}

$desktop = @(
  "$env:USERPROFILE\Desktop",
  "$env:USERPROFILE\OneDrive\Desktop"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

$zipPath = if ($desktop) { Join-Path $desktop $zipName } else { Join-Path $root $zipName }
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path (Join-Path $dist "*") -DestinationPath $zipPath -Force

Write-Host ""
Write-Host "Production folder : $dist"
Write-Host "Deployment package: $zipPath"
Write-Host "Files             : $((Get-ChildItem $dist -Recurse -File).Count)"

$configPath = Join-Path $root "deploy.config.json"
if (-not $Upload -and (Test-Path $configPath)) {
  $cfg = Get-Content $configPath -Raw -Encoding UTF8 | ConvertFrom-Json
  if ($cfg.ftpHost) {
    $FtpHost = $cfg.ftpHost
    $FtpUser = $cfg.ftpUser
    $FtpPass = $cfg.ftpPass
    $RemotePath = if ($cfg.remotePath) { $cfg.remotePath } else { $RemotePath }
    $Upload = $true
  }
}

if ($Upload) {
  if (-not $FtpHost -or -not $FtpUser -or -not $FtpPass) {
    throw "FTP upload requires -FtpHost, -FtpUser, and -FtpPass (or deploy.config.json)."
  }

  Write-Host ""
  Write-Host "Uploading to ftp://$FtpHost$RemotePath ..."

  function Upload-FtpFile([string]$localFile, [string]$remoteFile) {
    $uri = "ftp://$FtpHost$remoteFile"
    $request = [System.Net.FtpWebRequest]::Create($uri)
    $request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
    $request.Credentials = New-Object System.Net.NetworkCredential($FtpUser, $FtpPass)
    $request.UseBinary = $true
    $request.UsePassive = $true
    $bytes = [IO.File]::ReadAllBytes($localFile)
    $request.ContentLength = $bytes.Length
    $stream = $request.GetRequestStream()
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Close()
    $response = $request.GetResponse()
    $response.Close()
  }

  function Ensure-FtpDir([string]$remoteDir) {
    if ($remoteDir -eq "" -or $remoteDir -eq "/") { return }
    $parts = $remoteDir.Trim("/").Split("/")
    $current = ""
    foreach ($part in $parts) {
      $current += "/$part"
      try {
        $uri = "ftp://$FtpHost$current"
        $request = [System.Net.FtpWebRequest]::Create($uri)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $request.Credentials = New-Object System.Net.NetworkCredential($FtpUser, $FtpPass)
        $request.UsePassive = $true
        $response = $request.GetResponse()
        $response.Close()
      } catch {
        # Directory may already exist.
      }
    }
  }

  Get-ChildItem $dist -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($dist.Length).Replace("\", "/")
    $remoteFile = ($RemotePath.TrimEnd("/") + $rel)
    $remoteDir = Split-Path $remoteFile -Parent
    Ensure-FtpDir $remoteDir.Replace("\", "/")
    Upload-FtpFile $_.FullName $remoteFile
    Write-Host "  uploaded $rel"
  }

  Write-Host "Upload complete."
}

Write-Host ""
Write-Host "Next: upload the contents of dist/ (or the zip) to your web root for www.dreamresort.co.jp"
