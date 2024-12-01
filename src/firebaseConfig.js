// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHu5vDMSTX7gzZ_mK0F94Tb6TfrrwEgug',
  authDomain: 'scentsearch-8fefc.firebaseapp.com',
  projectId: 'scentsearch-8fefc',
  storageBucket: 'scentsearch-8fefc.appspot.com',
  messagingSenderId: '8755124606',
  appId: '1:8755124606:web:d11cb216b0140bf464bb2f',
  measurementId: 'G-TM4XHF87VG', // Ensure this is your correct Measurement ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

export { app, analytics };
