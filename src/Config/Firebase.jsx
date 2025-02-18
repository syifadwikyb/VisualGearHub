// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8D8o-zne8ZiVvhqmGmhz7YS7gweiTgJ0",
  authDomain: "visualgearhub.firebaseapp.com",
  projectId: "visualgearhub",
  storageBucket: "visualgearhub.firebasestorage.app",
  messagingSenderId: "611698815431",
  appId: "1:611698815431:web:1d80a1fead3615fe1269e2",
  measurementId: "G-LZ2K346QW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);