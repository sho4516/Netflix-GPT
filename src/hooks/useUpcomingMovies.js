import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieReducer";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const upcomingMovies = async () => {
    try {
      const url = "https://api.themoviedb.org/3/movie/upcoming?&page=1";
      const result = await fetch(url, MOVIE_OPTIONS);
      const data = await result.json();
      dispatch(addUpcomingMovies(data.results));
    } catch (error) {
      console.log("Error fetching upcoming movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

  return loading;
};

export default useUpcomingMovies;
