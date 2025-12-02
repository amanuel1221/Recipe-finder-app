# 🍳 Recipe Finder App

A modern, responsive web application to search recipes, view details, and save favorites. Built with React + Vite, Tailwind CSS, Zustand and Firebase.

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

## Folder structure
recipe-finder-app/
- public/
- src/
  - components/ (Navbar, Footer, Display, Home, Favorites, Profile, SignIn, SignUp, RecipeDetails)
  - store/ (useRecipeStore.js)
  - context/ (AuthContext.js)
  - App.jsx, main.jsx, index.css
- package.json

## Installation (Windows)
1. Clone
   git clone https://github.com/amanuel1221/Recipe-finder-app.git
   cd recipe-finder-app
2. Install
   npm install
3. Run dev server
   npm run dev
4. Open
   http://localhost:5173

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

## Contributing
- Fork, create a branch, implement changes, open a PR.
- Keep components small and use Tailwind utility classes.

## Contact / Author
Amanuel Amare  
Email: amanuelamare1221@gmail.com  
GitHub: https://github.com/amanuel1221/Recipe-finder-app.git

Social:
- Facebook: https://facebook.com/manuell2111
- Instagram: https://instagram.com/manuell211
- X: https://x.com/AmanuelAma66386

## License
MIT — see LICENSE file.
