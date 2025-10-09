import React, { useState } from "react";
import useRecipeStore from "../../recipe-finder-apps/src/store/recipestore";
import "./App.css";
import Search from './components/search';

function App() {
  return(
    <div>
      <Search/>
      
    </div>
  );
}

export default App;
