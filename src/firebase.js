// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3M6LrZ-lntiXRL7bfcOA2DLLfr4SzbAY",
  authDomain: "murhamysteeri-ebaf9.firebaseapp.com",
  projectId: "murhamysteeri-ebaf9",
  storageBucket: "murhamysteeri-ebaf9.firebasestorage.app",
  messagingSenderId: "1083322986919",
  appId: "1:1083322986919:web:b44917abf77dc2aa80c682",
  measurementId: "G-QZ82YSMFQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
