import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();  // Get the recipe ID from the URL
  console.log("Recipe ID:", id);  // Check if this logs the expected ID
  const [recipe, setRecipe] = useState(null);  // State to hold the recipe data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    // Fetch recipe data from the API based on the ID
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe data");
        }
        const data = await response.json();  // Parse the JSON response
        setRecipe(data);  // Set the recipe data
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message);  // Set the error state
        setLoading(false);  // Set loading to false even if an error occurs
      }
    };

    fetchRecipe();  // Call the fetch function when the component mounts
  }, [id]);  // Dependency array ensures the effect runs when the ID changes

  // If the recipe is still loading, show a loading message
  if (loading) return <p>Loading recipe...</p>;

  // If there is an error, show an error message
  if (error) return <p className="text-red-500">{error}</p>;

  // If no recipe is found, show a message
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center text-3xl font-semibold mb-4">{recipe.name}</h2>

      <div className="recipe-detail-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recipe Image */}
        <div className="recipe-image-container">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="recipe-image w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Ingredients Section */}
        <div className="ingredients-container">
          <h3 className="text-xl font-semibold mb-3">Ingredients:</h3>
          <ul className="ingredients-list list-disc pl-5 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item text-lg text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="instructions-container mt-6">
        <h3 className="text-xl font-semibold mb-3">Instructions:</h3>
        <p className="instructions-text text-lg text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;

