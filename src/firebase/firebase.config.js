// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2wYEG1c1KeEbMQ3kRBldq_PCeJ7fek98",
  authDomain: "react-dragon-news-auth-28095.firebaseapp.com",
  projectId: "react-dragon-news-auth-28095",
  storageBucket: "react-dragon-news-auth-28095.appspot.com",
  messagingSenderId: "331628469390",
  appId: "1:331628469390:web:a4506914f25226042b3ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;