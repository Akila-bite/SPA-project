// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "./FavoriteRecipes.css"

// const FavoriteRecipes = () => {
//   // Get the persisted favorites from Redux store
//   const favorites = useSelector((state) => state.recipes.favorites || []);
//   const navigate = useNavigate();

//   // Function to navigate to a specific recipe details page
//   const navigateToRecipeDetails = (id) => {
//     navigate(`/recipe/${id}`);
//   };

//   return (
//     <div className="favorites-page-container">
//       <div className="mx-auto px-4 py-6">
//       <h1 className="favorites-heading text-center mb-6">My Favorites
//       <span className="material-icons">favorite</span>
//       </h1>
//       <div className="row">
//         {/* Check if there are any favorite recipes */}
//         {favorites.length > 0 ? (
//           favorites.map((recipe) => (
//             <div key={recipe.id} className="col-md-4 mb-4">
//               <div className="card" style={{ width: "18rem" }}>
//                 {/* Display recipe image */}
//                 <img
//                   src={recipe.image}
//                   className="card-img-top"
//                   alt={recipe.name}
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   {/* Recipe title */}
//                   <h5 className="card-title">{recipe.name}</h5>

//                   {/* Button to navigate to the recipe details */}
//                   <button
//                     className="btn btn-custom btn-sm mt-2"
//                     onClick={() => navigateToRecipeDetails(recipe.id)}
//                   >
//                     View Recipe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No favorite recipes yet.</p>
//         )}
//       </div>
//     </div>
//    </div> 
//   );
// };

// export default FavoriteRecipes;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Components/LoginModal";
import "./FavoriteRecipes.css";

const FavoriteRecipes = () => {
  const favorites = useSelector((state) => state.recipes.favorites || []);
  const { currentUser } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      setShowLoginModal(true);
    }
  }, [currentUser]);

  const navigateToRecipeDetails = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="favorites-page-container">
      {showLoginModal && (
  <LoginModal
    onClose={() => {
      if (!currentUser) {
        navigate("/"); // Prevents access if they close without logging in
      } else {
        setShowLoginModal(false);
      }
    }}
    showIntro={true}
  />
)}

      <div className="mx-auto px-4 py-6">
        <h1 className="favorites-heading text-center mb-6">
          My Favorites
          <span className="material-icons">favorite</span>
        </h1>
        <div className="row">
          {favorites.length > 0 ? (
            favorites.map((recipe) => (
              <div key={recipe.id} className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <button
                      className="btn btn-custom btn-sm mt-2"
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
    </div>
  );
};

export default FavoriteRecipes;






