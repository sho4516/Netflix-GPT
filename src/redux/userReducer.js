import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
    remove: (state, action) => {
      return null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
