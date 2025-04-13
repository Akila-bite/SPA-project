

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://myfoodify-backend.onrender.com/api/recipes");

      if (!response.ok) {
        return rejectWithValue("Failed to fetch recipes: " + response.statusText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("Network error: " + error.message);
    }
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

