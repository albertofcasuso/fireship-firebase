import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyB0st_cx2IDDQ2BPYgpksj2tbybFaLNMMo",
  authDomain: "nextfire-b0e9d.firebaseapp.com",
  projectId: "nextfire-b0e9d",
  storageBucket: "nextfire-b0e9d.appspot.com",
  messagingSenderId: "758745461691",
  appId: "1:758745461691:web:f571ad0af42b537bb00a9e",
  measurementId: "G-WE1B8SCJQ1"
};

if(!firebase.apps.length){
  const app = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
