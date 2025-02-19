import React from "react";
import "../utils/css/gptSearch.css";

const GptSearch = () => {
    return (
      <div className="absolute w-full h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg')] bg-cover bg-center"></div>
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Search Box */}
        <div className="relative h-full z-10 gpt-search">
          <form className="search-form p-2">
            <input
              className="p-2 rounded-lg outline-none"
              type="text"
              placeholder="Type to search"
            />
            <button className="rounded-lg bg-red-500 px-4 py-2 text-white">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  };

export default GptSearch;
