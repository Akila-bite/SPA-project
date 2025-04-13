
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRecipes, addFavorite, removeFavorite, filterRecipes } from "../app/recipesSlice"; // Adjust path if needed
// import { useNavigate } from "react-router-dom";
// import SearchBar from "../Components/SearchBar"; 
// import "./Recipes.css";

// const RecipeList = () => {
//   const dispatch = useDispatch();
//   const { items: recipes, filteredItems, status, error, favorites } = useSelector((state) => state.recipes);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchRecipes());
//     }
//   }, [status, dispatch]);

//   const handleSearch = (query) => {
//     dispatch(filterRecipes(query)); // Dispatch search query to filter recipes
//   };

//   if (status === "loading") return <p className="text-center text-lg">Loading recipes...</p>;
//   if (status === "failed") return <p className="text-center text-red-500">Error: {error}</p>;
//   if (!recipes || recipes.length === 0) return <p className="text-center">No recipes available.</p>;

//   // Navigate to full recipe page
//   const navigateToRecipeDetails = (id) => {
//     navigate (`/recipe/${id}`);
//   };

//   // Check if the recip e is already in favorites
//   const isFavorite = (recipeId) => {
//     return favorites.some((recipe) => recipe.id === recipeId);
//   };

//   // Toggle favorite status
//   const handleToggleFavorite = (recipe) => {
//     if (isFavorite(recipe.id)) {
//       dispatch(removeFavorite(recipe)); // Remove from favorites if already in favorites
//     } else {
//       dispatch(addFavorite(recipe)); // Add to favorites if not in favorites
//     }
//   };

//   // Use filtered items if available, otherwise use all recipes
//   const displayedRecipes = filteredItems.length > 0 ? filteredItems : recipes;

//   return (
//     <div className="recipe-page-container">
//       <div className="mx-auto px-4 py-6">
//         <h1 className="recipes-heading text-center mb-6">
//           WELCOME TO THE RECIPES PAGE
//           <span className="material-icons">restaurant_menu</span>
//         </h1>

//         {/* Search bar */}
//         <SearchBar onSearch={handleSearch} />

//         <div className="row">
//           {displayedRecipes.map((recipe) => (
//             <div key={recipe.id} className="col-md-4 mb-4">
//               <div className="card w-full">
//                 <img
//                   src={recipe.image}
//                   className="card-img-top"
//                   alt={recipe.name}
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-wrap break-words min-h-[48px] text-xl font-bold text-center">
//                     {recipe.name}
//                   </h5>
//                   <div className="d-flex flex-column">
//                     <button
//                       className={`btn ${isFavorite(recipe.id) ? 'btn-danger' : 'btn-outline-danger'} btn-sm w-full`}
//                       onClick={() => handleToggleFavorite(recipe)}
//                     >
//                       <i className="bi bi-heart"></i> {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
//                     </button>
//                     <button
//                       className="btn btn-custom btn-sm mt-2 w-full"
//                       onClick={() => navigateToRecipeDetails(recipe.id)}
//                     >
//                       View Recipe
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeList;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, addFavorite, removeFavorite, filterRecipes } from "../app/recipesSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import "./Recipes.css";

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    items: recipes,
    filteredItems,
    status,
    error,
    favorites,
  } = useSelector((state) => state.recipes);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  const handleSearch = (query) => {
    dispatch(filterRecipes(query));
  };

  const isFavorite = (recipeId) => favorites.some((r) => r.id === recipeId);

  const handleToggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  const navigateToRecipeDetails = (id) => {
    navigate(`/recipe/${id}`);
  };

  const displayedRecipes =
    filteredItems.length > 0 ? filteredItems : recipes;

  // Log state to help diagnose blank page issues after deployment
  console.log("STATUS:", status);
  console.log("RECIPES:", recipes);
  console.log("FILTERED:", filteredItems);
  console.log("ERROR:", error);

  if (status === "loading") {
    return (
      <div className="text-center py-8">
        <p className="text-lg animate-pulse">Loading recipes...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-600 py-8">
        <p className="text-lg font-semibold">Oops! Something went wrong.</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!displayedRecipes || displayedRecipes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 text-lg">No recipes available.</p>
      </div>
    );
  }

  return (
    <div className="recipe-page-container">
      <div className="mx-auto px-4 py-6">
        <h1 className="recipes-heading text-center mb-6">
          WELCOME TO THE RECIPES PAGE
          <span className="material-icons">restaurant_menu</span>
        </h1>

        <SearchBar onSearch={handleSearch} />

        <div className="row">
          {displayedRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card w-full">
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-wrap break-words min-h-[48px] text-xl font-bold text-center">
                    {recipe.name}
                  </h5>
                  <div className="d-flex flex-column">
                    <button
                      className={`btn ${
                        isFavorite(recipe.id)
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } btn-sm w-full`}
                      onClick={() => handleToggleFavorite(recipe)}
                    >
                      <i className="bi bi-heart"></i>{" "}
                      {isFavorite(recipe.id)
                        ? "Remove from Favorites"
                        : "Add to Favorites"}
                    </button>
                    <button
                      className="btn btn-custom btn-sm mt-2 w-full"
                      onClick={() => navigateToRecipeDetails(recipe.id)}
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;

 
 
 










 








 

