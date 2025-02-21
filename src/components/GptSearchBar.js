import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovieDetailsFromMovieArrayNames from "../hooks/useSearchMovieDetailsFromMovieArrayNames";
import openai from "../utils/openai";
import lang from "../utils/lang";
import "../utils/css/gptSearch.css";
import { toggleGptSearchLoader } from "../redux/appConfigReducer";
import { FaSpinner } from "react-icons/fa";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((state) => state.languageReducer.language);
  const { isGptSearchLoading } = useSelector((state) => state.appReducer);

  const searchText = useRef(null);

  const [movieNamesArray, setMovieNamesArray] = useState([]);

  useSearchMovieDetailsFromMovieArrayNames(movieNamesArray);

  const handleGptSearchClick = async () => {
    dispatch(toggleGptSearchLoader());
    const gptQuery =
      "Act as a movie recommendation system and give results for following query " +
      searchText.current.value +
      ". Give 5 movie names, comma separated like ahead example. Example - Koi mil gaya, Gadar, Kal ho na ho, Don, Race. Make sure that all results must come in one line, without any numbering, just comma separated names.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const movieNamesArray = gptResults.choices[0].message.content.split(", ");
    setMovieNamesArray(movieNamesArray);
  };
  return (
    <div className="relative h-full z-10 gpt-search">
      <form className="search-form p-2" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-2 px-6 w-[25%] rounded-lg outline-none"
          type="text"
          placeholder={lang[langKey].searchPlaceholderText}
        />
        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-white w-auto flex items-center justify-center"
          onClick={handleGptSearchClick}
        >
          {isGptSearchLoading ? (
            <>
              <FaSpinner className="animate-spin mr-2" /> Loading...
            </>
          ) : (
            lang[langKey].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
