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
