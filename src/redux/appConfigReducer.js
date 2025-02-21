import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appConfig",
  initialState: { isGptSearchLoading: false },
  reducers: {
    toggleGptSearchLoader: (state, action) => {
      state.isGptSearchLoading = !state.isGptSearchLoading;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { toggleGptSearchLoader } = appSlice.actions;
