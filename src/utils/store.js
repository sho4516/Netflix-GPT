import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/userReducer";
import { movieReducer } from "../redux/movieReducer";
import { gptReducer } from "../redux/gptReducer";
import { languageReducer } from "../redux/languageReducer";
import { appReducer } from "../redux/appConfigReducer";

export const store = configureStore({
  reducer: {
    userReducer,
    movieReducer,
    gptReducer,
    languageReducer,
    appReducer,
  },
});
