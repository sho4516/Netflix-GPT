import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { nowPlayingMovies: [], movieTrailer: null };

const movieSlice = createSlice({
  name: "movies",
  initialState: INITIAL_STATE,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieTrailer,
} = movieSlice.actions;
