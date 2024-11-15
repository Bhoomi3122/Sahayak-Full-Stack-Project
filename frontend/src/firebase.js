// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKcsIvOnvYIx1sKUen39t2saY6TaJO27A",
  authDomain: "sahayak-8b8ee.firebaseapp.com",
  projectId: "sahayak-8b8ee",
  storageBucket: "sahayak-8b8ee.appspot.com",
  messagingSenderId: "299494516179",
  appId: "1:299494516179:web:28d4ee4faa4af640c67b26",
  measurementId: "G-KE869B64MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };