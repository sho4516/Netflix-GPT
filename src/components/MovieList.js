import React from "react";
import MovieCard from "./MovieCard";
import "../utils/css/movieList.css";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="movie_list">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="movie_list_cards">
        {movies.map((movie) => (
          <MovieCard className="movie_card" imgsrc={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
