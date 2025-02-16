import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((state) => state.movieReducer.nowPlayingMovies);
  return (
    <div
      className="relative z-20 text-white flex flex-col"
      style={{ marginTop: "40rem" }}
    >
      <MovieList
        title="Now Playing"
        movies={movies}
      />

      <MovieList
        title="Now Playing"
        movies={movies}
      />
    </div>
  );
};

export default SecondryContainer;
