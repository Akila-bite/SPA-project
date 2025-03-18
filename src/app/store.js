
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage)
import userReducer from "./userSlice";
import recipesReducer from "./recipesSlice";
import searchReducer from "./searchSlice";
import { combineReducers } from "redux";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "recipes"], // Persist only user and recipes
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer, 
  recipes: recipesReducer,
  search: searchReducer,
});

// Wrap entire root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with serializable check fix
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };
