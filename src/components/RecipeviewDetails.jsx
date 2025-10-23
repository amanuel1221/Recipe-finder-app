
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div className="text-center mt-20">
        <p>No recipe selected.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  
  

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4 hover:bg-blue-600"
      >
        ← Back
      </button>

      <img
        src={recipe.image || recipe.images?.SMALL?.url}
        alt={recipe.label}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold mt-4">{recipe.label}</h2>
      <p className="text-yellow-500 font-semibold mt-1">⭐ {(Math.random() * 2 + 3).toFixed(1)} / 5</p>
     

      <h3 className="text-xl font-semibold mt-6 mb-2">🧾 Ingredients:</h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {recipe.ingredients?.map((item, i) => (
          <li key={i}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
