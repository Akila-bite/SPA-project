

import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        return { ...state, user: action.payload }; // ✅ Ensure state is not mutated incorrectly
      } else {
        console.warn("setUser received null/undefined payload"); // Debugging
        return state; // Prevent modifying state if payload is invalid
      }
    },
    logoutUser: (state) => {
      return { ...state, user: null }; // ✅ Ensure state remains an object
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload?.user) {
        return { ...state, user: action.payload.user };
      }
      return state; // ✅ Ensure state doesn't break if there's no user
    });
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
