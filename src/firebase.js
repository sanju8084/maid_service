// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern24-643c6.firebaseapp.com",
  projectId: "mern24-643c6",
  storageBucket: "mern24-643c6.firebasestorage.app",
  messagingSenderId: "260885840279",
  appId: "1:260885840279:web:5caf8edae9e33c372704d2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
