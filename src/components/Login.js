import React, { useState } from "react";
import Header from "./Header";
import "../utils/css/form.css";
import { validate } from "../utils/validator";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    const message = validate(email, password);
    setErrorMessage(message);

    if (message) return;

    if (isSignIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                userActions.add({
                  uid,
                  email,
                  displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorMessage);
        });
    }
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
          id="password"
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
