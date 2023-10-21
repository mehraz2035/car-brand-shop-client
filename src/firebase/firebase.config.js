// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMZwMtFYhHzeQ0wqFm2P8POt0DfY7v1qQ",
  authDomain: "car-brand-shop-14b85.firebaseapp.com",
  projectId: "car-brand-shop-14b85",
  storageBucket: "car-brand-shop-14b85.appspot.com",
  messagingSenderId: "728840209216",
  appId: "1:728840209216:web:294bad5c6e0844ebd370a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);