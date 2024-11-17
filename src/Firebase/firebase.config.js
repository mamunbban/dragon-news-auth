// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVu57hbQPQubJu3vNassknH-m-y5VeyBI",
  authDomain: "dragon-news-50286.firebaseapp.com",
  projectId: "dragon-news-50286",
  storageBucket: "dragon-news-50286.firebasestorage.app",
  messagingSenderId: "842056263438",
  appId: "1:842056263438:web:f98f8d96f53a9d8defd95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;