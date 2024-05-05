// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:'AIzaSyA3BFllA9ePG3BzQCf1gzSq_B7bmQjZ1jw',
  authDomain:'netflix-cl-17180.firebaseapp.com',
  projectId:'netflix-cl-17180',
  storageBucket:'netflix-cl-17180.appspot.com',
  messagingSenderId:'80334315519',
  appId:'1:80334315519:web:06dae07829bcfaa8f4d1ca' ,
  measurementId:'G-5EPPTZWMM3'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);