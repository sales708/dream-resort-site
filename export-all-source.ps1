# Export all text source into ALL-SOURCE-CODE.txt
$root = $PSScriptRoot
$files = @(
  "index.html",
  "index-single.html",
  "company.html",
  "company-single.html",
  "privacy.html",
  "privacy-single.html",
  "terms.html",
  "terms-single.html",
  "inquiry.html",
  "inquiry-single.html",
  "robots.txt",
  "sitemap.xml",
  "build-all.ps1",
  "build-single.ps1",
  "export-all-source.ps1",
  "preview-server.ps1",
  "assets\css\main.css",
  "assets\js\i18n.js",
  "assets\js\main.js",
  "assets\js\legal-page.js",
  "assets\js\footer-snippet.js",
  "assets\js\destinations-data.js",
  "assets\js\destination-detail.js",
  "assets\js\dest-tokyo.js",
  "assets\js\dest-kansai.js",
  "assets\js\dest-golden-route.js",
  "assets\js\dest-golden-route-upgrade.js",
  "destinations\tokyo.html",
  "destinations\tokyo-single.html",
  "destinations\kansai.html",
  "destinations\kansai-single.html",
  "destinations\golden-route.html",
  "destinations\golden-route-single.html",
  "destinations\golden-route-upgrade.html",
  "destinations\golden-route-upgrade-single.html",
  "destinations\kyoto.html",
  "destinations\kyoto-single.html",
  "destinations\osaka.html",
  "destinations\osaka-single.html",
  "destinations\hokkaido.html",
  "destinations\hokkaido-single.html",
  "assets\images\logo.svg",
  "assets\images\hero-main.svg",
  "assets\images\og-image.svg",
  "assets\images\dest-tokyo.svg",
  "assets\images\dest-kyoto.svg",
  "assets\images\dest-osaka.svg",
  "assets\images\dest-hokkaido.svg",
  "assets\images\posters\poster-tokyo.svg",
  "assets\images\posters\poster-kyoto.svg",
  "assets\images\posters\poster-osaka.svg",
  "assets\images\posters\poster-hokkaido.svg"
)
$binaryAssets = @(
  "assets\images\logo.png",
  "assets\images\logo-icon.png",
  "assets\images\hero-fuji.png",
  "assets\images\hero\slide-fuji.png",
  "assets\images\hero\slide-osaka.png",
  "assets\images\hero\slide-tokyo.png",
  "assets\images\hero\slide-inari.png",
  "assets\images\hero\slide-shirakawa.png",
  "assets\images\posters\poster-tokyo-discovery.png",
  "assets\images\posters\poster-kansai-discovery.png",
  "assets\images\posters\poster-golden-route.png",
  "assets\images\posters\poster-golden-route-upgrade.png"
)
$out = Join-Path $root "ALL-SOURCE-CODE.txt"
$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine("DREAM RESORT SITE - COMPLETE SOURCE CODE")
[void]$sb.AppendLine("Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("Binary assets (included in zip, not inlined below):")
foreach ($b in $binaryAssets) { [void]$sb.AppendLine("  - $b") }
[void]$sb.AppendLine("")
foreach ($f in $files) {
  $path = Join-Path $root $f
  if (-not (Test-Path $path)) { Write-Warning "Missing: $f"; continue }
  [void]$sb.AppendLine("")
  [void]$sb.AppendLine("================================================================================")
  [void]$sb.AppendLine("FILE: $f")
  [void]$sb.AppendLine("================================================================================")
  [void]$sb.AppendLine("")
  [void]$sb.AppendLine([IO.File]::ReadAllText($path))
}
[IO.File]::WriteAllText($out, $sb.ToString(), [Text.UTF8Encoding]::new($false))
$lines = ([IO.File]::ReadAllLines($out)).Count
Write-Host "Exported $lines lines -> $out"

$desktopPaths = @(
  "$env:USERPROFILE\Desktop",
  "$env:USERPROFILE\OneDrive\Desktop"
) | Where-Object { Test-Path $_ } | Select-Object -Unique

foreach ($desk in $desktopPaths) {
  Copy-Item $out (Join-Path $desk "dream-resort-site-ALL-CODE.txt") -Force
  Write-Host "Desktop copy -> $(Join-Path $desk 'dream-resort-site-ALL-CODE.txt')"
}
