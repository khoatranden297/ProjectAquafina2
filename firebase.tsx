// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1fzwX9G_S_TZYjNRgIAZ9WK0CHVTQoEE",
  authDomain: "aquafina1-6369d.firebaseapp.com",
  projectId: "aquafina1-6369d",
  storageBucket: "aquafina1-6369d.appspot.com",
  messagingSenderId: "1055948734283",
  appId: "1:1055948734283:web:b0c19de8d86d031b4232ce",
  measurementId: "G-BZV72D63D4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const analytics = getDatabase(app);