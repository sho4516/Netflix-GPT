import React from "react";
import { useSelector } from "react-redux";
import "../utils/css/gptSuggestions.css";
import MovieList from "./MovieList";

export const GptSuggestions = () => {
  const gpt = useSelector((state) => state.movieReducer);
  const { movieNames, movieResults } = gpt;
  if (!movieNames) return null;

  return (
    <div className="gpt-suggestions text-black">
      {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};
