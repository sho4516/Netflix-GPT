import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/userReducer";
import { movieReducer } from "../redux/movieReducer";
import { gptReducer } from "../redux/gptReducer";

export const store = configureStore({
  reducer: { userReducer, movieReducer, gptReducer },
});
