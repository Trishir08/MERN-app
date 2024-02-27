// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "part3-e4551.firebaseapp.com",
  projectId: "part3-e4551",
  storageBucket: "part3-e4551.appspot.com",
  messagingSenderId: "580070360801",
  appId: "1:580070360801:web:e0e245885ceafd0b3499a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);