import React, { useState, useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gptReducer.showGptSearch);
  const isNowPlayingMoviesLoading = useNowPlayingMovies();
  const isPopularMoviesLoading = usePopularMovies();
  const isTopRatedMoviesLoading = useTopRatedMovies();
  const isUpcomingMoviesLoading = useUpcomingMovies();

  const isLoading =
    isNowPlayingMoviesLoading ||
    isPopularMoviesLoading ||
    isTopRatedMoviesLoading ||
    isUpcomingMoviesLoading;

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="overflow-hidden">
      <Header />
      {showGptSearch && (
        <GptSearch />
      )}
      {!showGptSearch && (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
