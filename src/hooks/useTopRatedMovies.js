import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieReducer";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const topRatedMovies = async () => {
    try {
      const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
      const result = await fetch(url, MOVIE_OPTIONS);
      const data = await result.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.log("Error fetching top rated movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    topRatedMovies();
  }, []);

  return loading;
};

export default useTopRatedMovies;
