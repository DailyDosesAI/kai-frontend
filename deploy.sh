#!/bin/bash

# Deployment script for DigitalOcean
echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Build the Docker image
echo "🔨 Building Docker image..."
docker-compose build

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Start new containers
echo "▶️ Starting new containers..."
docker-compose up -d

# Clean up unused images
echo "🧹 Cleaning up unused images..."
docker image prune -f

echo "✅ Deployment completed!"
echo "🌐 Your app should be running on http://your-server-ip:3000" 