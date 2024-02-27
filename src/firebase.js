// Import the functions you need from the SDKs you need
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
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

const signInWithGitHub = async () => {
  const response = signInWithPopup(auth, githubAuthProvider);

  return response;
} 

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  signInWithGitHub,
};
