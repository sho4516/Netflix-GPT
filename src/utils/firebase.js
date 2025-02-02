// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4HWco3_xmJocE99-uAInh1TMXI-J7KG8",
  authDomain: "netflix-gpt-77c9c.firebaseapp.com",
  projectId: "netflix-gpt-77c9c",
  storageBucket: "netflix-gpt-77c9c.firebasestorage.app",
  messagingSenderId: "461282003684",
  appId: "1:461282003684:web:2310dae3aab4ab6a477af1",
  measurementId: "G-W5V19W9JD9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

