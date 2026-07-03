# One-time setup: log in to GitHub, create repo, push, and enable Pages.
$ErrorActionPreference = "Stop"
$env:Path = "C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;" + $env:Path
$root = $PSScriptRoot
Set-Location $root

Write-Host "Step 1/4: GitHub login"
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
  gh auth login -h github.com -p https -w
}

Write-Host ""
Write-Host "Step 2/4: Create GitHub repository (private or public)"
$repo = Read-Host "GitHub repo (e.g. yourname/dream-resort-site)"
if (-not $repo) { throw "Repository name required." }

gh repo create $repo --source=. --remote=origin --push --public

Write-Host ""
Write-Host "Step 3/4: Enable GitHub Pages (GitHub Actions source)"
gh api repos/$repo/pages -X POST -f build_type=workflow -f cname=www.dreamresort.co.jp 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Pages may already be enabled. Open repo Settings -> Pages -> Source: GitHub Actions."
}

Write-Host ""
Write-Host "Step 4/4: Trigger deployment workflow"
gh workflow run deploy-pages.yml
Start-Sleep -Seconds 3
gh run list --workflow=deploy-pages.yml --limit 1

Write-Host ""
Write-Host "When the workflow finishes, the site will be live at:"
Write-Host "  https://www.dreamresort.co.jp  (after DNS is configured)"
Write-Host "  https://<your-username>.github.io/<repo-name>/  (GitHub default URL)"
Write-Host ""
Write-Host "DNS for www.dreamresort.co.jp:"
Write-Host "  Type: CNAME"
Write-Host "  Host: www"
Write-Host "  Value: <your-username>.github.io"
