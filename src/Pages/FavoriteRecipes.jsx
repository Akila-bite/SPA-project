import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoriteRecipes = () => {
  // Get the persisted favorites from Redux store
  const favorites = useSelector((state) => state.recipes.favorites || []);
  const navigate = useNavigate();

  // Function to navigate to a specific recipe details page
  const navigateToRecipeDetails = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Favorite Recipes</h2>
      <div className="row">
        {/* Check if there are any favorite recipes */}
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                {/* Display recipe image */}
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  {/* Recipe title */}
                  <h5 className="card-title">{recipe.name}</h5>

                  {/* Button to navigate to the recipe details */}
                  <button
                    className="btn btn-primary btn-sm mt-2"
                    onClick={() => navigateToRecipeDetails(recipe.id)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No favorite recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteRecipes;


