// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbNyPWJqyQh89_PsDiroMOzpQO7lsS92g",
  authDomain: "bijao-33673.firebaseapp.com",
  projectId: "bijao-33673",
  storageBucket: "bijao-33673.appspot.com",
  messagingSenderId: "961433288311",
  appId: "1:961433288311:web:1dbb1c0427c051b52c1072",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db

/* export const onGetTask = () => // console.log("tomandofoto"); */