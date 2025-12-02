# 🍳 Recipe Finder App

## Preview
- Search recipes and view results in a responsive grid.
- Detailed recipe pages with ingredients and instructions.
- Save favorites to your account.

## Live Demo
- Coming soon — deploy to Vercel / Netlify / GitHub Pages.

## Tech Stack
- Frontend: React (Vite)
- Styling: Tailwind CSS
- State: Zustand
- Routing: React Router
- API: TheMealDB (configurable)
- Auth / DB: Firebase Auth + Firestore

## Features
- Search recipes by name or keyword
- View recipe details (ingredients, instructions, category, area)
- Save/remove favorites per user (Firestore sync)
- User profile (display name, avatar)
- Responsive, mobile-first UI

## Usage
- Sign up / sign in with Firebase.
- Search using the search input.
- Click a recipe to view details.
- Click the heart icon to toggle favorite (requires sign-in).
- View favorites at /favorites.

## Notes for developers
- API: TheMealDB used for quick demo; swap for another API by updating fetch endpoint in src/store/usestore.js.
- Favorites are saved to Firestore under `users/{uid}.favorites`.
- Zustand store located at src/store/usestore.js.

