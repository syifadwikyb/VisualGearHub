import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8D8o-zne8ZiVvhqmGmhz7YS7gweiTgJ0",
  authDomain: "visualgearhub.firebaseapp.com",
  projectId: "visualgearhub",
  storageBucket: "visualgearhub.appspot.com",
  messagingSenderId: "611698815431",
  appId: "1:611698815431:web:1d80a1fead3615fe1269e2",
  measurementId: "G-LZ2K346QW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Menambahkan auth
const analytics = getAnalytics(app);

export { app, auth, analytics };
