import React, { useState } from "react";
import Header from "./Header";
import "../utils/css/form.css";
import { validate } from "../utils/validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = () => {
    const message = validate(email, password);
    setErrorMessage(message);
  };
  return (
    <div className="relative w-full h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg')] bg-cover bg-center flex flex-column justify-center">
      <Header />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div>

      <form onSubmit={(e) => e.preventDefault()} className="form">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="email"
        />

        <p className="text-red-500 mr-auto pl-9 font-bold">{errorMessage}</p>

        <button
          onClick={() => handleClick()}
          className="hover:bg-red-700"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="toggle" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a user. Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
