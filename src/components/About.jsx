
import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">About Recipe Finder</h1>
      <p className="text-gray-700 mb-4">
        Recipe Finder is a web application designed to help you discover delicious meals from around the world. 
        Search for recipes by name, view detailed instructions, and save your favorites for later.
      </p>
      <p className="text-gray-700 mb-4">
        This app uses <strong>TheMealDB API</strong> to provide recipe data, including ingredients, instructions, and images. 
        You can also create an account to save your favorite recipes and easily access them anytime.
      </p>
      <p className="text-gray-700 mb-4">
        Our goal is to make cooking simple, fun, and accessible to everyone. Whether you are a beginner or an experienced chef, 
        Recipe Finder helps you explore a wide variety of cuisines and dishes.
      </p>
      <p className="text-gray-700 text-center mt-6">
        Happy Cooking! 🍽️
      </p>
    </div>
  );
};

export default About;
