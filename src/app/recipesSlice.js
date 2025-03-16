

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
//   console.log("fetchRecipes called!"); // Debugging
//   const response = await fetch("http://localhost:5000/api/recipes");
//   console.log("API Response:", response); // Debugging

//   const data = await response.json();
//   console.log("Fetched Data:", data); // Debugging
//   return data;
// });

// const recipesSlice = createSlice({
//   name: "recipes",
//   initialState: {
//     items: [],  // All recipes
//     favorites: [],  // Favorite recipes
//     status: "idle",  // ✅ Fixed typo
//     error: null,
//   },
//   reducers: {
//     addFavorite: (state, action) => {
//       const recipe = action.payload;
//       if (!state.favorites.find((fav) => fav.id === recipe.id)) {
//         state.favorites.push(recipe);
//       }
//     },
//     removeFavorite: (state, action) => {
//       state.favorites = state.favorites.filter((recipe) => recipe.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRecipes.pending, (state) => {
//         state.status = "loading";  // ✅ Use status, not loading
//         state.error = null;
//       })
//       .addCase(fetchRecipes.fulfilled, (state, action) => {
//         state.status = "succeeded"; // ✅ Correct async state
//         state.items = action.payload;
//         console.log("Redux State Updated:", state.items); // Debugging
//       })
//       .addCase(fetchRecipes.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//         console.error("Fetch Error:", action.error.message); // Debugging
//       });
//   },
// });

// // Export actions
// export const { addFavorite, removeFavorite } = recipesSlice.actions;

// // Export reducer
// export default recipesSlice.reducer;

// recipesSlice.js

// recipesSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// This is where you'll call your API or fetch data
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch("http://localhost:5000/api/recipes");
    const data = await response.json();
    return data; // Return the recipes data
  }
);

const initialState = {
  items: [], // All recipes
  filteredItems: [], // Filtered recipes based on search query
  favorites: [],
  status: "idle",
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const recipe = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.id === recipe.id);
      if (!isFavorite) {
        state.favorites.push(recipe);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload.id
      );
    },
    filterRecipes: (state, action) => {
      const query = action.payload.toLowerCase();
      // Filter the recipes based on name or category
      state.filteredItems = state.items.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(query) ||
          recipe.category.toLowerCase().includes(query)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Save the fetched recipes
        state.filteredItems = action.payload; // Initially, show all recipes
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite, filterRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
