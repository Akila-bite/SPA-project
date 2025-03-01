import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, addToFavorites, removeFromFavorites } from "../features/recipesSlice";

export default function RecipeList() {
  const dispatch = useDispatch();
  const { recipes, favorites, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (status === "loading") return <p>Loading recipes...</p>;
  if (status === "failed") return <p>Failed to load recipes.</p>;

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <button onClick={() => dispatch(addToFavorites(recipe))}>
            Add to Favorites
          </button>
          <button onClick={() => dispatch(removeFromFavorites(recipe.id))}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

