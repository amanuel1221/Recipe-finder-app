// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCI1siNl8hwCyYrT1vCNMe2681FAGYhdIA",
  authDomain: "recipe-finder-app-69104.firebaseapp.com",
  projectId: "recipe-finder-app-69104",
  storageBucket: "recipe-finder-app-69104.appspot.com",
  messagingSenderId: "476281502173",
  appId: "1:476281502173:web:409cfae8d60849dd7ade34",
  measurementId: "G-JL6NE5R3G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
