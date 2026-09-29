# Automated AWS Deployment & Docker Build Script for Hemanth Kumar Galam Portfolio

Param (
    [string]$Region = "eu-north-1",
    [string]$BucketName = "hemanth-portfolio-website-eu-north-1",
    [string]$CloudFrontId = "E1BXV6OFQH8OYI"
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " HEMANTH GALAM PORTFOLIO - AWS DEPLOYMENT ($Region)" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Production Build
Write-Host "`n[1/5] Building production Vite bundle..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Production build failed!" -ForegroundColor Red
    exit 1
}

# 2. Sync to AWS S3 Bucket
Write-Host "`n[2/5] Uploading assets to AWS S3 Bucket: $BucketName ($Region)..." -ForegroundColor Yellow
aws s3 sync dist/ s3://$BucketName --delete --region $Region
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to sync to AWS S3!" -ForegroundColor Red
    exit 1
}

# 3. Ensure S3 Web Hosting Policy
Write-Host "`n[3/5] Ensuring S3 public web hosting policy..." -ForegroundColor Yellow
aws s3 website s3://$BucketName --index-document index.html --error-document index.html --region $Region

# 4. Invalidate AWS CloudFront HTTPS CDN Cache
Write-Host "`n[4/5] Invalidating AWS CloudFront HTTPS CDN cache ($CloudFrontId)..." -ForegroundColor Yellow
aws cloudfront create-invalidation --distribution-id $CloudFrontId --paths "/*"

# 5. Optional Local Docker Container Build
Write-Host "`n[5/5] Building local Docker container image (personal-portfolio:latest)..." -ForegroundColor Yellow
docker build -t personal-portfolio:latest .

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host " DEPLOYMENT COMPLETE! YOUR WEBSITE IS LIVE AT:" -ForegroundColor Green
Write-Host " HTTPS CDN Endpoint: https://d15z79a3mmyt62.cloudfront.net" -ForegroundColor Cyan
Write-Host " S3 Website Endpoint: http://$BucketName.s3-website.$Region.amazonaws.com" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Green
