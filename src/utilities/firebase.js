// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1nmN476CfVFvdE3p_o8b49sgRHmpZ94A",
  authDomain: "netflixgpt-ab597.firebaseapp.com",
  projectId: "netflixgpt-ab597",
  storageBucket: "netflixgpt-ab597.appspot.com",
  messagingSenderId: "882850167187",
  appId: "1:882850167187:web:edd99a086688e3f87b1066",
  measurementId: "G-LMP4LTZ066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
