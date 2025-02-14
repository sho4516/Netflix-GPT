import React from "react";
import "../utils/css/VideoTitle.css";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="title">
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="w-3/4 mt-3">{overview}</p>
      <div className="buttons">
        <button>
          <i className="fa-solid fa-play"></i>Play
        </button>
        <button className="info">
          <div className="i">i</div>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
