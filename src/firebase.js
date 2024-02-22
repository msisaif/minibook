// Import the functions you need from the SDKs you need
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWsq9r1iIvGC8Noxsob6-aZ8svR7M7uIQ",
  authDomain: "minibook-313.firebaseapp.com",
  projectId: "minibook-313",
  storageBucket: "minibook-313.appspot.com",
  messagingSenderId: "75680827767",
  appId: "1:75680827767:web:d9d0008238c4f254683972",
  measurementId: "G-F7HCCGNMEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, 'notification_received');

const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const user = res.user;

  return user;
};

const loginWithEmailAndPassword = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);

  return response;
};

const sendPasswordReset = async (email) => {
  const response = await sendPasswordResetEmail(auth, email);

  return response;
};

const signInWithGoogle = async () => {
  const response = signInWithPopup(auth, googleAuthProvider);

  return response;
} 

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
};
