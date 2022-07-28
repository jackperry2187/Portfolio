import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmkWga-5e7R9NYV2aKiNtdNlRbhJnqvzI",
  authDomain: "jackperry2187-5c8e1.firebaseapp.com",
  projectId: "jackperry2187-5c8e1",
  storageBucket: "jackperry2187-5c8e1.appspot.com",
  messagingSenderId: "428200039763",
  appId: "1:428200039763:web:e306a33f0aa86c7f14bda6",
  measurementId: "G-S6BD58MDYV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);