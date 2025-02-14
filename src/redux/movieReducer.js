import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { nowPlayingMovies: [], movieTrailer: null };

const movieSlice = createSlice({
  name: "movies",
  initialState: INITIAL_STATE,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const { addNowPlayingMovies, addMovieTrailer } = movieSlice.actions;
