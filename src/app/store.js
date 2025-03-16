

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage)
import userReducer from "./userSlice"; // Import userReducer
import recipesReducer from "./recipesSlice"; 
import searchReducer from "./searchSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "recipes"], // Persist user and recipes
 
};

// Create persisted reducers
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedRecipesReducer = persistReducer(persistConfig, recipesReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer, // User slice persisted
    recipes: persistedRecipesReducer, // Recipes slice persisted
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);


export { store, persistor };


