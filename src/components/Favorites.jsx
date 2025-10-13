import React from "react";
import useRecipeStore from "../store/UseStore";
const Favorites = () => {
  const { favorites, toggleFavorite } = useRecipeStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">❤️ Your Favorites</h2>
      <p className="text-center text-gray-500 mb-8">
        Discover new recipes by exploring your favorites!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No favorites yet!
          </p>
        ) : (
          favorites.map((recipe, index) => {
            const rating = (Math.random() * 2 + 3).toFixed(1);
            return (
              <div
                key={recipe.id || index}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img
                  src={recipe.image || recipe.images?.SMALL?.url}
                  alt={recipe.label}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(recipe)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition"
                  title="Remove from favorites"
                >
                  ❤️
                </button>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{recipe.label}</h3>
                  <p className="text-yellow-500 font-bold mt-1">
                    ⭐ {rating} / 5
                  </p>
                  <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 block"
                  >
                    View Recipe →
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorites;
