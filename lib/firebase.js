import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0st_cx2IDDQ2BPYgpksj2tbybFaLNMMo",
  authDomain: "nextfire-b0e9d.firebaseapp.com",
  projectId: "nextfire-b0e9d",
  storageBucket: "nextfire-b0e9d.appspot.com",
  messagingSenderId: "758745461691",
  appId: "1:758745461691:web:f571ad0af42b537bb00a9e",
  measurementId: "G-WE1B8SCJQ1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export const SignInWithPopup = () => signInWithPopup(auth, googleAuthProvider);
export const SignOut = () => signOut(auth);

const db = getFirestore(app);
export const userRef = (uid) => doc(db, "users", uid);
export const userSnapshot = (ref, callback) => {
  onSnapshot(ref, doc => callback(doc));
};
