import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ imgsrc }) => {
  return (
    <div className="movie_card mr-4">
      <div className="img-container">
        <img alt="movie_poster" src={IMG_CDN + imgsrc} />
      </div>
    </div>
  );
};

export default MovieCard;
