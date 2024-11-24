// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHu5vDMSTX7gzZ_mK0F94Tb6TfrrwEgug",
  authDomain: "scentsearch-8fefc.firebaseapp.com",
  projectId: "scentsearch-8fefc",
  storageBucket: "scentsearch-8fefc.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "8755124606",
  appId: "1:8755124606:web:d11cb216b0140bf464bb2f",
  measurementId: "G-TM4XHF87VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);         // Set up Firebase Authentication
export const db = getFirestore(app);       // Set up Firestore Database
