// import { createSlice } from "@reduxjs/toolkit";
// import { REHYDRATE } from 'redux-persist';

// // Initial state for user, with `user` set to null initially (no user logged in)
// const initialState = {
//   user: null, // User will store the user data (e.g., name, email)
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     // Action to set user data when they log in
//     setUser: (state, action) => {
//       state.user = action.payload; // Save user info to the state
//     },
//     // Action to clear user data when they log out
//     logoutUser: (state) => {
//       state.user = null; // Clear user info when logged out
//     },

//     extraReducers: (builder) => {
//       builder.addCase(REHYDRATE, (state, action) => {
//         if (action.payload?.user) {
//           state.user = action.payload.user; // Restore user from persisted state
//         }
//       });
//     },

//   },
// });


// export const { setUser, logoutUser } = userSlice.actions;

// // to be used in the store configuration
// export default userSlice.reducer;

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
