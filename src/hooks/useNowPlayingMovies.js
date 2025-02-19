import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieReducer";
import { useEffect, useState } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const nowPlayingMovies = async () => {
    try {
      const result = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        MOVIE_OPTIONS
      );
      const data = await result.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.log("Error fetching now playing movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);

  return loading;
};

export default useNowPlayingMovies;
