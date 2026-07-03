# Regenerate all single-file HTML builds from multi-file sources
$root = $PSScriptRoot
$css  = Get-Content "$root\assets\css\main.css" -Raw -Encoding UTF8
$i18n = Get-Content "$root\assets\js\i18n.js" -Raw -Encoding UTF8
$main = Get-Content "$root\assets\js\main.js" -Raw -Encoding UTF8
$legal = Get-Content "$root\assets\js\legal-page.js" -Raw -Encoding UTF8
$expoPage = Get-Content "$root\assets\js\expo-page.js" -Raw -Encoding UTF8
$destData   = Get-Content "$root\assets\js\destinations-data.js" -Raw -Encoding UTF8
$destDetail = Get-Content "$root\assets\js\destination-detail.js" -Raw -Encoding UTF8
$destTokyo  = Get-Content "$root\assets\js\dest-tokyo.js" -Raw -Encoding UTF8
$destGoldenRoute = Get-Content "$root\assets\js\dest-golden-route.js" -Raw -Encoding UTF8
$destGoldenUpgrade = Get-Content "$root\assets\js\dest-golden-route-upgrade.js" -Raw -Encoding UTF8
$destKansai = Get-Content "$root\assets\js\dest-kansai.js" -Raw -Encoding UTF8

function Build-HomeSingle {
  $html = Get-Content "$root\index.html" -Raw -Encoding UTF8
  $html = $html -replace '<link rel="stylesheet" href="assets/css/main\.css" />', "<style>`n$css`n</style>"
  $html = $html -replace '(?s)<script src="assets/js/i18n\.js"></script>\s*<script src="assets/js/main\.js"></script>', "<script>`n$i18n`n$main`n</script>"
  Set-Content "$root\index-single.html" -Value $html -Encoding UTF8 -NoNewline
  Write-Host "  index-single.html"
}

function Build-LegalSingle {
  param([string]$Name)
  $html = Get-Content "$root\$Name" -Raw -Encoding UTF8
  $html = $html -replace '<link rel="stylesheet" href="assets/css/main\.css" />', "<style>`n$css`n</style>"
  $html = $html -replace '(?s)<script src="assets/js/i18n\.js"></script>\s*<script src="assets/js/legal-page\.js"></script>', "<script>`n$i18n`n$legal`n</script>"
  $out = $Name -replace '\.html$', '-single.html'
  Set-Content "$root\$out" -Value $html -Encoding UTF8 -NoNewline
  Write-Host "  $out"
}

function Build-ExpoSingle {
  param([string]$Name)
  $html = Get-Content "$root\expo\$Name" -Raw -Encoding UTF8
  $html = $html -replace '<link rel="stylesheet" href="\.\./assets/css/main\.css" />', "<style>`n$css`n</style>"
  $html = $html -replace '(?s)<script src="\.\./assets/js/i18n\.js"></script>\s*<script src="\.\./assets/js/expo-page\.js"></script>', "<script>`n$i18n`n$expoPage`n</script>"
  $out = $Name -replace '\.html$', '-single.html'
  Set-Content "$root\expo\$out" -Value $html -Encoding UTF8 -NoNewline
  Write-Host "  expo/$out"
}

function Build-DestSingle {
  param(
    [string]$SrcName,
    [string]$OutName,
    [string]$ExtraJs
  )
  $html = Get-Content "$root\destinations\$SrcName" -Raw -Encoding UTF8
  $html = $html -replace '<link rel="stylesheet" href="\.\./assets/css/main\.css" />', "<style>`n$css`n</style>"
  $scriptBlock = "<script>`n$i18n`n$destData`n$ExtraJs`n$destDetail`n</script>"
  $html = $html -replace '(?s)<script src="\.\./assets/js/i18n\.js"></script>\s*<script src="\.\./assets/js/destinations-data\.js"></script>\s*<script src="\.\./assets/js/[^"]+\.js"></script>\s*<script src="\.\./assets/js/destination-detail\.js"></script>', $scriptBlock
  $html = $html -replace '(?s)<script src="\.\./assets/js/i18n\.js"></script>\s*<script src="\.\./assets/js/destinations-data\.js"></script>\s*<script src="\.\./assets/js/destination-detail\.js"></script>', "<script>`n$i18n`n$destData`n$destDetail`n</script>"
  Set-Content "$root\destinations\$OutName" -Value $html -Encoding UTF8 -NoNewline
  Write-Host "  destinations/$OutName"
}

Write-Host "Building single-file HTML..."
Build-HomeSingle
foreach ($p in @("company.html", "privacy.html", "terms.html", "inquiry.html")) {
  Build-LegalSingle -Name $p
}
Build-DestSingle -SrcName "tokyo.html"  -OutName "tokyo-single.html"  -ExtraJs $destTokyo
Build-DestSingle -SrcName "golden-route.html" -OutName "golden-route-single.html" -ExtraJs $destGoldenRoute
Build-DestSingle -SrcName "golden-route-upgrade.html" -OutName "golden-route-upgrade-single.html" -ExtraJs $destGoldenUpgrade
Build-DestSingle -SrcName "kansai.html" -OutName "kansai-single.html" -ExtraJs $destKansai
Build-DestSingle -SrcName "kyoto.html"  -OutName "kyoto-single.html"  -ExtraJs ""
Build-DestSingle -SrcName "osaka.html"  -OutName "osaka-single.html"  -ExtraJs ""
Build-DestSingle -SrcName "hokkaido.html" -OutName "hokkaido-single.html" -ExtraJs ""
foreach ($e in @("index.html", "nagano-2026.html", "jnto-mart-2026.html", "australia-japan-2026.html", "indonesia-2026.html")) {
  Build-ExpoSingle -Name $e
}
Write-Host "Done."
