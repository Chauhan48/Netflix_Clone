# 🎬 Netflix Clone

A modern Netflix clone built with React, Vite, and Tailwind CSS, featuring Firebase authentication and movie browsing capabilities.

## ✨ Features

- 🎭 Browse movies and TV shows
- 🔐 User authentication with Firebase
- 🎬 Movie details and trailers
- 🔍 Search functionality
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS

## 🚀 Live Demo

**🌐 Live Site**: [https://chauhan48.github.io/Netflix_Clone](https://chauhan48.github.io/Netflix_Clone)

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chauhan48/Netflix_Clone.git
   cd Netflix_Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the project root:
   ```bash
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment. Every push to the `main` branch will automatically deploy to GitHub Pages.

**Setup GitHub Secrets:**
1. Go to your repository settings
2. Navigate to Secrets and variables → Actions
3. Add the following secrets:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Windows users can use the PowerShell script**
   ```powershell
   .\deploy.ps1
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and configurations
├── assets/             # Static assets
└── App.jsx             # Main application component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 🌐 Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Get your project configuration
4. Add the configuration to your environment variables

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Netflix for inspiration
- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Chauhan48/Netflix_Clone/issues) page
2. Create a new issue with detailed information
3. Check the [Deployment Guide](DEPLOYMENT.md) for deployment issues

---

**⭐ Star this repository if you found it helpful!**
