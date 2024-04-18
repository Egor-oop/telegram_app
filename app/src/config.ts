// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ZrWmLdurWhQpVU6jHyDkPBsqxiejGus",
  authDomain: "tg-posts.firebaseapp.com",
  projectId: "tg-posts",
  storageBucket: "tg-posts.appspot.com",
  messagingSenderId: "393857503529",
  appId: "1:393857503529:web:335fabf32a69301e746738",
  measurementId: "G-K5ZR5HY4TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);