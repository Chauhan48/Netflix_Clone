# Netflix Clone

A React-based Netflix clone built with Vite, Redux Toolkit, and Tailwind CSS.

## Features

- Browse movies with different categories (Now Playing, Popular, Trending)
- Responsive design with Tailwind CSS
- Redux state management
- Firebase authentication

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API access token:
   ```
   VITE_TMDB_API_ACCESS_TOKEN=your_tmdb_api_access_token_here
   ```

   To get your API access token:
   - Go to https://www.themoviedb.org/settings/api
   - Create an account and request an API key
   - Copy your API access token

4. Run the development server:
   ```bash
   npm run dev
   ```

## CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline using GitHub Actions and Firebase Hosting.

### Workflow Overview

The CI/CD pipeline consists of three main workflows:

1. **Pull Request Checks** (`pr-checks.yml`)
   - Runs on every pull request
   - Code quality checks (ESLint, Prettier)
   - Security audits
   - Build verification

2. **Main CI/CD Pipeline** (`ci.yml`)
   - Runs on pushes to main/develop branches
   - Complete testing and building
   - Security scanning
   - Artifact storage

### Manual Deployment

You can trigger manual deployments using GitHub Actions:

1. Go to Actions tab in your repository
2. Select "Deploy" workflow
3. Click "Run workflow"

### Pipeline Features

- ✅ **Automated Testing**: Linting, formatting, and build checks
- ✅ **Security Scanning**: npm audit for vulnerability detection
- ✅ **Multi-Environment Deployment**: Staging and production environments
- ✅ **Artifact Storage**: Build artifacts stored for 7 days
- ✅ **Manual Triggers**: On-demand deployment capability
- ✅ **Environment Protection**: Required reviews for production deployments

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Technologies Used

- React 19
- Vite
- Redux Toolkit
- Tailwind CSS
- Firebase
- TMDB API
- GitHub Actions (CI/CD)
