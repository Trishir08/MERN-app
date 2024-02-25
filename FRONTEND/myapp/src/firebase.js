// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-state-mern-fc084.firebaseapp.com",
  projectId: "real-state-mern-fc084",
  storageBucket: "real-state-mern-fc084.appspot.com",
  messagingSenderId: "467175386032",
  appId: "1:467175386032:web:37b40913c10f2ca19b4475"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const auth = getAuth(app) ; 

//export {app , auth} ; 