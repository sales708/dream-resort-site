# Simple one-command deploy to GitHub Pages (branch: pages-deploy)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Building site..."
.\build-all.ps1

Write-Host "Committing changes..."
git add -A
$status = git status --porcelain
if ($status) {
  git commit -m "Deploy site update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
} else {
  Write-Host "No file changes to commit."
}

Write-Host "Pushing to GitHub Pages branch..."
git push origin pages-deploy

Write-Host ""
Write-Host "Done. Site will update in 1-2 minutes at:"
Write-Host "  https://sales708.github.io/dream-resort-site/"
