import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieReducer";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_OPTIONS
    );
    const data = await result.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
