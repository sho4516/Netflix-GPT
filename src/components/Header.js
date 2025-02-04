import React, { useState } from "react";
import "../utils/css/Header.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const uid = useSelector((state) => state.userReducer?.uid);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full flex flex-row z-10 bg-gradient-to-b from-black justify-between align-middle">
      <div className="relative w-1/3 ml-16">
        <img
          className="w-60"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {uid && (
        <div
          className="flex flex-row items-center w-1/6 justify-start gap-2"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="relative image-holder cursor-pointer">
            <img
              src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              alt=""
            />
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
      )}
    </div>
  );
};

export default Header;
