import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((state) => state.movieReducer);
  return (
    <div
      className="relative text-white flex flex-col"
      style={{ marginTop: "40rem" }}
    >
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondryContainer;
