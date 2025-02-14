import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/userReducer";
import { movieReducer } from "../redux/movieReducer";

export const store = configureStore({
  reducer: { userReducer, movieReducer },
});
