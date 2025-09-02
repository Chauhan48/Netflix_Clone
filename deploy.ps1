# PowerShell Deployment Script for GitHub Pages
Write-Host "🚀 Starting deployment to GitHub Pages..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Deploy to GitHub Pages
Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Deployment successful!" -ForegroundColor Green
Write-Host "🌐 Your site should be available at: https://chauhan48.github.io/Netflix_Clone" -ForegroundColor Cyan
Write-Host "📝 Note: It may take a few minutes for changes to appear." -ForegroundColor Yellow
