#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Deploy to Firebase
echo "🔥 Deploying to Firebase..."
firebase deploy

echo "✅ Deployment complete!"
echo "🌐 Your app is live at: https://netfilx-clone-8a8b1.web.app" 