import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://api.foodify.com/recipes"; // Replace with actual API

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async (query = "") => {
    try {
      const response = await fetch(`${API_URL}?search=${query}`);
      const data = await response.json();
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Discover New Recipes</h1>
      <SearchBar onSearch={fetchRecipes} />
      {loading ? <p>Loading...</p> : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}


