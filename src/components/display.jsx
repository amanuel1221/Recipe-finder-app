import React from "react";
const MealDisplay = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {recipes.map((recipe, index) => {
        const rating = (Math.random() * 2 + 3).toFixed(1);

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={recipe.image || recipe.images?.SMALL?.url}
              alt={recipe.label}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{recipe.label}</h3>
              <p className="text-yellow-500 font-bold mt-1">⭐ {rating} / 5</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MealDisplay;
