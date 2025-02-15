import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/movieReducer";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movieReducer?.movieTrailer);
  console.log(trailerVideo);

  const fetchMovieVideos = async () => {
    console.log("hello");
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      MOVIE_OPTIONS
    );

    const result = await data.json();
    const trailerObject = result.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      trailerObject.length > 0 ? trailerObject[0] : result.results[0];

    console.log("hello" + trailer);

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieVideos();
  }, []);

  return (
    <div className="absolute top-0 w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
