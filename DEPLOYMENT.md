# 🚀 GitHub Pages Deployment Guide

## Current Status
✅ **Project configured for GitHub Pages deployment**  
🌐 **Live URL**: https://chauhan48.github.io/Netflix_Clone  
📁 **Repository**: Netflix_Clone

## 📋 Setup Checklist

### 1. Environment Variables Setup

You need to set up environment variables for Firebase configuration. Create a `.env` file in your project root:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**To get these values:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the gear icon → Project Settings
4. Scroll down to "Your apps" section
5. Copy the configuration values

### 2. GitHub Repository Secrets Setup

To enable automatic deployment via GitHub Actions, you need to add these secrets to your GitHub repository:

1. Go to your GitHub repository: https://github.com/Chauhan48/Netflix_Clone
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

**Required Secrets:**
- `FIREBASE_API_KEY` - Your Firebase API key
- `FIREBASE_AUTH_DOMAIN` - Your Firebase auth domain
- `FIREBASE_PROJECT_ID` - Your Firebase project ID
- `FIREBASE_STORAGE_BUCKET` - Your Firebase storage bucket
- `FIREBASE_MESSAGING_SENDER_ID` - Your Firebase messaging sender ID
- `FIREBASE_APP_ID` - Your Firebase app ID
- `FIREBASE_MEASUREMENT_ID` - Your Firebase measurement ID

**Optional Secrets:**
- `CNAME` - Custom domain (if you have one)

### 3. Manual Deployment

For manual deployment, use the provided script:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### 4. Automatic Deployment

The CI/CD workflow is configured to automatically deploy when you push to the `main` branch. The workflow will:

1. ✅ Install dependencies
2. ✅ Create environment file from secrets
3. ✅ Build the project
4. ✅ Deploy to GitHub Pages (only on main branch)

## 🔧 Troubleshooting

### Common Issues:

1. **Build fails**: Check if all dependencies are installed
   ```bash
   npm install
   ```

2. **Environment variables missing**: Make sure your GitHub secrets are set correctly

3. **Page not loading**: Check the GitHub Actions tab for deployment status

4. **404 errors**: Ensure the base path in `vite.config.js` matches your repository name

5. **Firebase errors**: Verify all Firebase environment variables are set in GitHub secrets

## 📊 Monitoring

- **GitHub Pages**: Check deployment status in your repository's Actions tab
- **Live Site**: https://chauhan48.github.io/Netflix_Clone
- **Repository**: https://github.com/Chauhan48/Netflix_Clone

## 🔄 Updating Your App

1. **For automatic deployment**: Just push to main branch and GitHub Actions will handle the rest!
   ```bash
   git add .
   git commit -m "Update app"
   git push origin main
   ```

2. **For manual deployment**: Use the deploy script
   ```bash
   npm run deploy
   ```

## 🎯 Next Steps

1. Set up Firebase environment variables in GitHub secrets
2. Push to main branch to trigger automatic deployment
3. Check the Actions tab for deployment status
4. Visit your live site at https://chauhan48.github.io/Netflix_Clone
5. Consider setting up a custom domain in GitHub Pages settings

## ⚠️ Important Notes

- **Base Path**: The app is configured with base path `/Netflix_Clone/` to match your repository name
- **Environment Variables**: All Firebase config must be set in GitHub secrets for production
- **Build Output**: The build creates a `dist` folder that gets deployed to GitHub Pages
- **Automatic Deployment**: Every push to main branch triggers a new deployment

---

**Need help?** Check the GitHub Actions logs in your repository's Actions tab for detailed error messages. 