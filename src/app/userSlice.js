import { createSlice } from "@reduxjs/toolkit";

// Initial state for user, with `user` set to null initially (no user logged in)
const initialState = {
  user: null, // User will store the user data (e.g., name, email)
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set user data when they log in
    setUser: (state, action) => {
      state.user = action.payload; // Save user info to the state
    },
    // Action to clear user data when they log out
    logoutUser: (state) => {
      state.user = null; // Clear user info when logged out
    },
  },
});


export const { setUser, logoutUser } = userSlice.actions;

// to be used in the store configuration
export default userSlice.reducer;
