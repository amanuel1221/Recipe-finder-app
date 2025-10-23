// src/store/UseStore.js
import { create } from "zustand";
import { db, auth } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  loading: false,
  error: null,

  // Fetch recipes from demo Edamam API
  fetchRecipes: async (query) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=demo&app_key=demo`
      );
      const data = await res.json();

      if (data.hits?.length > 0) {
        const recipes = data.hits.map((hit) => ({ ...hit.recipe, id: hit.recipe.uri }));
        set({ recipes, loading: false });
      } else {
        set({ error: "No meals found 😕", loading: false });
      }
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },

  // Load favorites for current user from Firestore
  loadFavorites: async () => {
    const user = auth.currentUser;
    if (!user) {
      set({ favorites: [] });
      return;
    }

    set({ loading: true });
    try {
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data();
        set({ favorites: data.favorites || [] });
      } else {
        await setDoc(userRef, { favorites: [] });
        set({ favorites: [] });
      }
    } catch (err) {
      console.error("loadFavorites error:", err);
    } finally {
      set({ loading: false });
    }
  },

  // Save favorites to Firestore
  saveFavorites: async (favorites) => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { favorites }, { merge: true });
    } catch (err) {
      console.error("saveFavorites error:", err);
    }
  },

  // Toggle a favorite recipe
  toggleFavorite: async (item) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please sign in to save favorites!");
      return;
    }

    const { favorites } = get();
    const exists = favorites.some((f) => f.id === item.id);
    const updatedFavorites = exists
      ? favorites.filter((f) => f.id !== item.id)
      : [...favorites, item];

    set({ favorites: updatedFavorites });

    // Save updated favorites in Firestore
    await get().saveFavorites(updatedFavorites).catch(err => console.error(err));
  },

  // Clear favorites on logout
  clearFavorites: () => set({ favorites: [] }),
}));

export default useRecipeStore;
