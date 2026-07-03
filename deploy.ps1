# Build and upload the site to Xserver (dr1999.com).
param(
  [string]$FtpHost,
  [string]$FtpUser,
  [string]$FtpPass,
  [string]$RemotePath = "/dr1999.com/public_html",
  [switch]$Upload,
  [switch]$CleanRemote
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$dist = Join-Path $root "dist"
$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$zipName = "dream-resort-site-$stamp.zip"

function New-FtpRequest([string]$uri, [string]$method) {
  $request = [System.Net.FtpWebRequest]::Create($uri)
  $request.Method = $method
  $request.Credentials = New-Object System.Net.NetworkCredential($FtpUser, $FtpPass)
  $request.UseBinary = $true
  $request.UsePassive = $true
  return $request
}

function Get-FtpCredentials {
  param([string]$HostName, [string]$User, [string]$Pass, [string]$Path)
  $script:FtpHost = $HostName
  $script:FtpUser = $User
  $script:FtpPass = $Pass
  $script:RemotePath = $Path
}

function Ensure-FtpDir([string]$remoteDir) {
  if ($remoteDir -eq "" -or $remoteDir -eq "/") { return }
  $parts = $remoteDir.Trim("/").Split("/")
  $current = ""
  foreach ($part in $parts) {
    $current += "/$part"
    try {
      $request = New-FtpRequest "ftp://$FtpHost$current" ([System.Net.WebRequestMethods+Ftp]::MakeDirectory)
      $response = $request.GetResponse()
      $response.Close()
    } catch {}
  }
}

function Remove-FtpDirectory([string]$remoteDir) {
  $uri = "ftp://$FtpHost$remoteDir"
  $listRequest = New-FtpRequest $uri ([System.Net.WebRequestMethods+Ftp]::ListDirectoryDetails)
  $response = $listRequest.GetResponse()
  $reader = New-Object IO.StreamReader($response.GetResponseStream())
  $details = $reader.ReadToEnd()
  $reader.Close()
  $response.Close()

  foreach ($line in ($details -split "`n")) {
    $entry = $line.Trim()
    if (-not $entry) { continue }
    $name = ($entry -split "\s+")[-1]
    if ($name -in @(".", "..")) { continue }
    $child = "$remoteDir/$name".Replace("//", "/")
    if ($entry -match "^d") {
      Remove-FtpDirectory $child
    } else {
      $deleteRequest = New-FtpRequest "ftp://$FtpHost$child" ([System.Net.WebRequestMethods+Ftp]::DeleteFile)
      $deleteRequest.GetResponse().Close()
    }
  }

  $removeDirRequest = New-FtpRequest $uri ([System.Net.WebRequestMethods+Ftp]::RemoveDirectory)
  try { $removeDirRequest.GetResponse().Close() } catch {}
}

function Upload-FtpFile([string]$localFile, [string]$remoteFile) {
  $request = New-FtpRequest "ftp://$FtpHost$remoteFile" ([System.Net.WebRequestMethods+Ftp]::UploadFile)
  $bytes = [IO.File]::ReadAllBytes($localFile)
  $request.ContentLength = $bytes.Length
  $stream = $request.GetRequestStream()
  $stream.Write($bytes, 0, $bytes.Length)
  $stream.Close()
  $request.GetResponse().Close()
}

Write-Host "Building single-file HTML..."
& (Join-Path $root "build-all.ps1")

if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null

$excludeNames = @(
  "dist", ".git", ".github", "preview-server.ps1", "export-all-source.ps1",
  "deploy.ps1", "build-all.ps1", "build-single.ps1", "setup-github-pages.ps1",
  "deploy.config.json", "ALL-SOURCE-CODE.txt", "_terms-body.html",
  "CNAME", "netlify.toml", ".gitignore"
)

$excludePatterns = @("*-single.html")

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
  if ($rel.StartsWith("dist\") -or $rel.StartsWith(".git\")) { return }
  if (-not (Should-Copy $rel)) { return }
  $dest = Join-Path $dist $rel
  $destDir = Split-Path $dest -Parent
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
  Copy-Item $_.FullName $dest -Force
}

$desktop = @("$env:USERPROFILE\OneDrive\Desktop", "$env:USERPROFILE\Desktop") | Where-Object { Test-Path $_ } | Select-Object -First 1
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
  Get-FtpCredentials $cfg.ftpHost $cfg.ftpUser $cfg.ftpPass ($(if ($cfg.remotePath) { $cfg.remotePath } else { $RemotePath }))
  $Upload = $true
  if ($cfg.cleanRemote) { $CleanRemote = $true }
}

if ($Upload) {
  if (-not $FtpHost -or -not $FtpUser -or -not $FtpPass) {
    throw "FTP upload requires deploy.config.json or -FtpHost/-FtpUser/-FtpPass."
  }

  Write-Host ""
  Write-Host "Target: ftp://$FtpHost$RemotePath"

  if ($CleanRemote) {
    Write-Host "Removing old site files from remote..."
    try {
      Remove-FtpDirectory $RemotePath.TrimEnd("/")
      Ensure-FtpDir $RemotePath.TrimEnd("/")
    } catch {
      Write-Warning "Remote cleanup issue (continuing upload): $($_.Exception.Message)"
    }
  }

  Get-ChildItem $dist -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($dist.Length).Replace("\", "/")
    $remoteFile = ($RemotePath.TrimEnd("/") + $rel)
    $remoteDir = (Split-Path $remoteFile -Parent).Replace("\", "/")
    Ensure-FtpDir $remoteDir
    Upload-FtpFile $_.FullName $remoteFile
    Write-Host "  uploaded $rel"
  }

  Write-Host ""
  Write-Host "Upload complete -> https://dr1999.com/"
} else {
  Write-Host ""
  Write-Host "Create deploy.config.json from deploy.config.example.json, then run:"
  Write-Host "  .\deploy.ps1 -Upload -CleanRemote"
}
