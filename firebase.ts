import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZr-sEkK0X_az4HnU2EV5K1lBIeqTViV4",
  authDomain: "chatgpt-clone-5d305.firebaseapp.com",
  projectId: "chatgpt-clone-5d305",
  storageBucket: "chatgpt-clone-5d305.appspot.com",
  messagingSenderId: "626329282004",
  appId: "1:626329282004:web:fc58c259f87462c3e16241",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
