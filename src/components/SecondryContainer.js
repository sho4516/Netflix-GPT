import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((state) => state.movieReducer.nowPlayingMovies);
  return (
    <div className="absolute z-20 text-white [bottom:-25%] flex overflow-x-auto">
      <MovieList title="Now Playing" movies={movies} />
    </div>
  );
};

export default SecondryContainer;
