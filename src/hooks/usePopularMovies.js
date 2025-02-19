import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieReducer";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const popularMovies = async () => {
    try {
      const url = "https://api.themoviedb.org/3/movie/popular?page=1";
      const result = await fetch(url, MOVIE_OPTIONS);
      const data = await result.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.log("Error fetching popular movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    popularMovies();
  }, []);

  return loading;
};

export default usePopularMovies;
