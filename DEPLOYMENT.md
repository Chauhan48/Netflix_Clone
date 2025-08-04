# 🚀 Firebase Deployment Guide

## Current Status
✅ **Project deployed successfully**  
🌐 **Live URL**: https://netfilx-clone-8a8b1.web.app  
🔥 **Firebase Project**: netfilx-clone-8a8b1

## 📋 Setup Checklist

### 1. Environment Variables Setup

You need to set up environment variables for Firebase configuration. Create a `.env` file in your project root:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=netfilx-clone-8a8b1.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=netfilx-clone-8a8b1
VITE_FIREBASE_STORAGE_BUCKET=netfilx-clone-8a8b1.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**To get these values:**
1. Go to [Firebase Console](https://console.firebase.google.com/project/netfilx-clone-8a8b1/overview)
2. Click on the gear icon → Project Settings
3. Scroll down to "Your apps" section
4. Copy the configuration values

### 2. GitHub Secrets Setup (for automatic deployment)

To enable automatic deployment via GitHub Actions, you need to add these secrets to your GitHub repository:

1. Go to your GitHub repository
2. Click Settings → Secrets and variables → Actions
3. Add the following secrets:

**FIREBASE_SERVICE_ACCOUNT**
- Go to [Firebase Console](https://console.firebase.google.com/project/netfilx-clone-8a8b1/overview)
- Click on the gear icon → Project Settings
- Go to "Service accounts" tab
- Click "Generate new private key"
- Download the JSON file
- Copy the entire JSON content and paste it as the secret value

### 3. Manual Deployment

For manual deployment, use the provided script:

```bash
# Make the script executable (Linux/Mac)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

Or manually:
```bash
npm run build
firebase deploy
```

### 4. Automatic Deployment

The CI/CD workflow is configured to automatically deploy when you push to the `main` branch. The workflow will:

1. ✅ Run linting and formatting checks
2. ✅ Build the project
3. ✅ Deploy to Firebase (only on main branch)

## 🔧 Troubleshooting

### Common Issues:

1. **Build fails**: Check if all dependencies are installed
   ```bash
   npm install
   ```

2. **Firebase not logged in**:
   ```bash
   firebase login
   ```

3. **Environment variables missing**: Make sure your `.env` file exists and has all required variables

4. **Deployment fails**: Check Firebase project permissions and service account setup

## 📊 Monitoring

- **Firebase Console**: https://console.firebase.google.com/project/netfilx-clone-8a8b1/overview
- **Hosting Analytics**: Available in Firebase Console → Hosting
- **GitHub Actions**: Check deployment status in your repository's Actions tab

## 🔄 Updating Your App

1. **For manual updates**:
   ```bash
   git add .
   git commit -m "Update app"
   git push origin main
   ```

2. **For automatic deployment**: Just push to main branch and GitHub Actions will handle the rest!

## 🎯 Next Steps

1. Set up environment variables in your local `.env` file
2. Add Firebase service account to GitHub secrets
3. Test the automatic deployment by pushing to main
4. Consider setting up a custom domain in Firebase Console
5. Set up Firebase Analytics for better insights

---

**Need help?** Check the Firebase documentation or GitHub Actions logs for detailed error messages. 