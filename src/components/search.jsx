import React, { useState, useEffect } from "react";
import useRecipeStore from '../store/UseStore';
import Display from "./Display";

const Search = () => {
  const [query, setQuery] = useState("");
  const { recipes, loading, error, fetchRecipes } = useRecipeStore();

  useEffect(() => {
    fetchRecipes("chicken");
  }, [fetchRecipes]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) fetchRecipes(query);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">🍳 Recipe Finder</h1>
      <p className="text-center text-gray-500 mt-2">
        Search meals or see popular recipes below
      </p>

      <form onSubmit={handleSearch} className="flex justify-center mt-6 gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=" e.g. pasta, chicken, salad..."
          className="border rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition"
        >
          Search
        </button>
      </form>
      {loading && <p className="text-center mt-4 text-blue-500">Fetching meals...</p>}

      {error && <p className="text-center mt-4 text-red-500 font-bold">{error}</p>}
<div className="">
      <Display recipes={recipes} />
      </div>
    </div>
  );
};

export default Search;
