import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-437b6.firebaseapp.com",
  projectId: "tutorial-437b6",
  storageBucket: "tutorial-437b6.appspot.com",
  messagingSenderId: "339023736268",
  appId: "1:339023736268:web:5682b8ba4f99e80dd6c169",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
