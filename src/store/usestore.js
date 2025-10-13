import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      loading: false,
      error: null,
      favorites: [],

      // toggle favorite by stable `id`
      toggleFavorite: (item) =>
        set((state) => {
          const isFavorite = state.favorites.some((fav) => fav.id === item.id);
          if (isFavorite) {
            return { favorites: state.favorites.filter((fav) => fav.id !== item.id) };
          }
          return { favorites: [...state.favorites, item] };
        }),

      addFavorite: (item) =>
        set((state) => {
          if (state.favorites.some((fav) => fav.id === item.id)) return {}; // already there
          return { favorites: [...state.favorites, item] };
        }),

      removeFavorite: (id) =>
        set((state) => ({ favorites: state.favorites.filter((fav) => fav.id !== id) })),

      fetchRecipes: async (query) => {
        set((state) => ({ ...state, loading: true, error: null, recipes: [] }));

        try {
          const res = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=demo&app_key=demo`
          );
          const data = await res.json();

          if (data.hits && data.hits.length > 0) {
            // attach a stable id for each recipe
            const recipes = data.hits.map((hit) => {
              const r = hit.recipe;
              return {
                ...r,
                id: r.uri, // stable unique id (you can also extract part after '#recipe_')
              };
            });

            set((state) => ({ ...state, recipes, loading: false }));
          } else {
            set((state) => ({ ...state, error: "No meals found 😕", loading: false }));
          }
        } catch (err) {
          set((state) => ({ ...state, error: "Failed to fetch meals", loading: false }));
        }
      },
    }),
    { name: "fav-storage" }
  )
);

export default useRecipeStore;
