// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVyW8o2_wRjmoELOKbiSRVH_21B2lYpY",
  authDomain: "interviewprep-aee45.firebaseapp.com",
  projectId: "interviewprep-aee45",
  storageBucket: "interviewprep-aee45.firebasestorage.app",
  messagingSenderId: "441553626078",
  appId: "1:441553626078:web:1861fc5b96a2d92949734f",
  measurementId: "G-CGN3JT2W34"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
