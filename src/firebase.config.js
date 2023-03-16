import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_u183tBWMxal5q8nmGFK1PZYtni2ZaGY",
  authDomain: "house-marketplace-app-a7cff.firebaseapp.com",
  projectId: "house-marketplace-app-a7cff",
  storageBucket: "house-marketplace-app-a7cff.appspot.com",
  messagingSenderId: "31442210649",
  appId: "1:31442210649:web:67b13dcaabe43fe6620648",
};

// Initialize Firebase
export const db = getFirestore();
