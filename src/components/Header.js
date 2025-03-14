import React, { useEffect, useState } from "react";
import "../utils/css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { userActions } from "../redux/userReducer";
import { LOGO, userAvatar } from "../utils/constants";
import { toggleGptSearchView } from "../redux/gptReducer";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/languageReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const uid = useSelector((state) => state.userReducer?.uid);
  const showGptSearch = useSelector((state) => state.gptReducer.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(userActions.add({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(userActions.remove());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleMenuClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="fixed top-0 h-20 w-full flex flex-row z-10 bg-gradient-to-b from-black justify-between items-center">
      <div className="relative w-1/3 ml-16 h-full flex items-center">
        <img className="relative h-full w-auto" src={LOGO} alt="logo" />
      </div>
      {uid && (
        <>
          <div className="flex flex-row items-center w-1/4 justify-start gap-2">
            {showGptSearch && (
              <select
                className="language_options"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((item) => (
                  <option value={item.identifier}>{item.value}</option>
                ))}
              </select>
            )}
            <button
              className="gpt-search-button text-white"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <div
              className="relative image-holder cursor-pointer"
              onClick={() => {
                handleMenuClick();
              }}
            >
              <img src={userAvatar} alt="" />
              <div
                className={`absolute w-56 h-auto top-[48px] -right-6 text-center p-4 caret ${
                  isOpen ? "open" : "close"
                }`}
              >
                <div className="absolute right-[29px] top-[-18px]">
                  <i className="fa-solid fa-caret-up text-white"></i>
                </div>
                <p
                  onClick={() => {
                    handleSignOut();
                  }}
                  className="relative text-white text-center w-full underline"
                >
                  Sign out of Netflix
                </p>
              </div>
            </div>
            <div>
              <span className="text-white cursor-pointer">
                <i
                  className={`${
                    isOpen ? "fa fa-caret-up" : "fa fa-caret-down"
                  } font-bold text-white`}
                ></i>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
