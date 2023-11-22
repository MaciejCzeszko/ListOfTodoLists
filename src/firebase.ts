// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUy1Cfpzd29rQ5F39xgmiE8WLLUoYtRxY",
  authDomain: "listoftodolists-deb88.firebaseapp.com",
  projectId: "listoftodolists-deb88",
  storageBucket: "listoftodolists-deb88.appspot.com",
  messagingSenderId: "918903333011",
  appId: "1:918903333011:web:869b6fef1a75c376b2ad66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
