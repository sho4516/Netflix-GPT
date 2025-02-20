import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../redux/movieReducer";

const useSearchMovieDetailsFromMovieArrayNames = (movieArray) => {
  const dispatch = useDispatch();
  const searchMovie = async (title) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      title +
      "&include_adult=false&language=en-US&page=1";
    console.log(url);

    const movieresult = await fetch(url, MOVIE_OPTIONS);
    const json = await movieresult.json();
    return json.results;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const moviePromises = movieArray.map((movie) => searchMovie(movie));
      const movieData = await Promise.all(moviePromises);
      console.log(movieData);
      dispatch(
        addGptMovies({ movieNames: movieArray, movieResults: movieData })
      );
    };
    if (movieArray.length == 0) return;
    fetchMovies();
  }, [movieArray]);
};

export default useSearchMovieDetailsFromMovieArrayNames;
