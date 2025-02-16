import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movieReducer?.nowPlayingMovies);
  const main_movie = movies[0];

  if (!main_movie) return;
  const { original_title, overview, id } = main_movie;
  return (
    <div className="overflow-x-hidden">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
