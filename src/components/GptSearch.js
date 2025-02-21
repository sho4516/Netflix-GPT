import React, { useRef, useState } from "react";
import "../utils/css/gptSearch.css";
import GptSearchBar from "./GptSearchBar";
import { GptSuggestions } from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div className="absolute w-full flex flex-col">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg')] bg-auto bg-center bg-cover bg-repeat min-h-screen"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
