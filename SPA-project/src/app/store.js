import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { combineReducers } from "redux";
import recipeReducer from "./recipeSlice";

// Combine reducers
const rootReducer = combineReducers({
  recipes: recipeReducer,
});

// Perists data in Redux state by using local storage
const persistConfig = {
  key: "root",
  storage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
export const store = configureStore({
  reducer: {
    recipes: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //  Disable strict serialization check
    }),
});


export const persistor = persistStore(store);
