$root = $PSScriptRoot
$port = 8081
$prefix = "http://localhost:$port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host "Preview server running at $prefix"
Write-Host "Press Ctrl+C to stop."

$mimes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".xml"  = "application/xml; charset=utf-8"
  ".txt"  = "text/plain; charset=utf-8"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".png"  = "image/png"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
    if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }

    $relative = $path.TrimStart("/")
    $filePath = Join-Path $root ($relative -replace "/", [IO.Path]::DirectorySeparatorChar)

    if (Test-Path $filePath -PathType Container) {
      $filePath = Join-Path $filePath "index.html"
    } elseif (-not (Test-Path $filePath -PathType Leaf)) {
      $indexTry = Join-Path $filePath "index.html"
      if (Test-Path $indexTry -PathType Leaf) {
        $filePath = $indexTry
      }
    }

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [IO.Path]::GetExtension($filePath).ToLowerInvariant()
      $contentType = $mimes[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }

      $bytes = [IO.File]::ReadAllBytes($filePath)
      $response.StatusCode = 200
      $response.ContentType = $contentType
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $body = [Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $response.StatusCode = 404
      $response.ContentType = "text/plain; charset=utf-8"
      $response.ContentLength64 = $body.Length
      $response.OutputStream.Write($body, 0, $body.Length)
    }

    $response.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
