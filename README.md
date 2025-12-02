# 🍳 Recipe Finder App

A responsive React app to search, view, and save recipes using TheMealDB API.  
Built with React, Tailwind CSS, Zustand, Firebase, and React Router.

## 🔗 Live Demo
[🚀 **View Live App**](https://recipe-finder-app-three-ecru.vercel.app/)

## 📸 Preview
- Search recipes and view results in a responsive grid.
- Detailed recipe pages with ingredients and instructions.
- Save favorites to your account.


![Home Page](./preview/home.png)
![Recipe Details](./preview/details.png)
![Favorites](./preview/favorites.png)

## 🛠 Tech Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router
- **API:** TheMealDB
- **Auth / DB:** Firebase Auth + Firestore

## ✨ Features
- Search recipes by name or keyword
- View recipe details (ingredients, instructions, category, area)
- Save/remove favorites per user (Firestore sync)
- User profile (display name, avatar)
- Responsive, mobile-first UI

## ⚡ Usage
1. Sign up / sign in with Firebase.
2. Search using the search input.
3. Click a recipe to view details.
4. Click the heart icon to toggle favorite (requires sign-in).
5. View favorites at `/favorites`.

## 🔧 Notes for Developers
- API: TheMealDB used for demo; swap with another API by updating the fetch endpoint in `src/store/usestore.js`.
- Favorites are saved to Firestore under `users/{uid}.favorites`.
- Zustand store is located at `src/store/usestore.js`.

## 🚀 Future Improvements
- Add search suggestions / autocomplete
- Add pagination for large results
- Dark mode toggle
- Enhanced UI animations for better UX
