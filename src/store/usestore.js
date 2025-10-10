import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  loading: false,
  error: null,

  fetchRecipes: async (query) => {
    set({ loading: true, error: null, recipes: [] });

    try {
      // ✅ Using Edamam demo API
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=demo&app_key=demo`
      );
      const data = await res.json();
      console.log("Demo API Data:", data); // DEBUG

      if (data.hits && data.hits.length > 0) {
        const recipes = data.hits.map((hit) => hit.recipe);
        set({ recipes, loading: false });
      } else {
        set({ error: "No meals found 😕", loading: false });
      }
    } catch (err) {
      set({ error: "Failed to fetch meals ", loading: false });
    }
  },
}));

export default useRecipeStore;
