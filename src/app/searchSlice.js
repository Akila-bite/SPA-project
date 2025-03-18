
import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";


const initialState = {
  query: "",
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
     setSearchResults: (state, action) => {
    state.results = action.payload;
    },

    extraReducers: (builder) => {
      builder.addCase(REHYDRATE, (state) => {
        // Clear search state after rehydration
        state.query = "";
        state.results = [];
      });

    }
  },
});

export const { setSearchQuery, setSearchResults} = searchSlice.actions;

export default searchSlice.reducer;
