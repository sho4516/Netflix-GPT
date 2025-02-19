import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/userReducer";
import { movieReducer } from "../redux/movieReducer";
import { gptReducer } from "../redux/gptReducer";
import { languageReducer } from "../redux/languageReducer";

export const store = configureStore({
  reducer: { userReducer, movieReducer, gptReducer, languageReducer },
});
