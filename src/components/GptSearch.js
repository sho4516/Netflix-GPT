import React from "react";
import "../utils/css/gptSearch.css";

const GptSearch = () => {
  return <div className="gpt-search">
    <div >
        <form className="search-form p-2">
            <input className="p-2 rounded-lg outline-none" type="text" placeholder="Type to search" />
            <button className="rounded-lg bg-red-500 px-4 py-2">Search</button>
        </form>
    </div>
  </div>;
};

export default GptSearch;
