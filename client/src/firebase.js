// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2fa25.firebaseapp.com",
  projectId: "mern-estate-2fa25",
  storageBucket: "mern-estate-2fa25.appspot.com",
  messagingSenderId: "514140387466",
  appId: "1:514140387466:web:a1087eecf95bdcbbcdd573"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);