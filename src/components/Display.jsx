import React, { useState } from "react";
import useRecipeStore from "../store/usestore";
import RecipeDetails from "./RecipeviewDetails";
import { Link } from "react-router-dom";

const Display = () => {
  const { recipes, favorites, toggleFavorite } = useRecipeStore();


 

  return (
    <div className="p-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {recipes.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No recipes found 🍽️
          </p>
        ) : (
          recipes.map((recipe, index) => {
            const rating = (Math.random() * 2 + 3).toFixed(1);
            const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);

            return (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img
                  src={recipe.image || recipe.images?.SMALL?.url}
                  alt={recipe.label}
                  className="w-full h-40 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(recipe)}
                  className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition ${
                    isFavorite
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } hover:scale-110`}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{recipe.label}</h3>
                  <p className="text-yellow-500 font-bold mt-1">
                    ⭐ {rating} / 5
                  </p>
                 <Link to="/recipe-details" state={{ recipe }}>
  <button className="text-blue-500">View Recipes</button>
</Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Display;
