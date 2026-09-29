#!/bin/bash

# Automated AWS Deployment & Docker Build Script for Hemanth Kumar Galam Portfolio

REGION="eu-north-1"
BUCKET_NAME="hemanth-portfolio-website-eu-north-1"
CLOUDFRONT_ID="E1BXV6OFQH8OYI"

echo "=========================================================="
echo " 🚀 HEMANTH GALAM PORTFOLIO - AWS DEPLOYMENT ($REGION)"
echo "=========================================================="

echo -e "\n[1/5] Building production Vite bundle..."
npm run build || { echo "❌ Production build failed!"; exit 1; }

echo -e "\n[2/5] Uploading assets to AWS S3 Bucket: $BUCKET_NAME..."
aws s3 sync dist/ "s3://$BUCKET_NAME" --delete --region "$REGION" || { echo "❌ Failed to sync to AWS S3!"; exit 1; }

echo -e "\n[3/5] Ensuring S3 public web hosting policy..."
aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document index.html --region "$REGION"

echo -e "\n[4/5] Invalidating AWS CloudFront HTTPS CDN cache ($CLOUDFRONT_ID)..."
aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*"

echo -e "\n[5/5] Building local Docker container image..."
docker build -t personal-portfolio:latest .

echo "=========================================================="
echo " ✅ DEPLOYMENT COMPLETE! YOUR WEBSITE IS LIVE AT:"
echo " 🔒 HTTPS CDN Endpoint: https://d15z79a3mmyt62.cloudfront.net"
echo " 🌐 S3 Website Endpoint: http://$BUCKET_NAME.s3-website.$REGION.amazonaws.com"
echo "=========================================================="
