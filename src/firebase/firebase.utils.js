import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdKCehJ7PwaoDzwpak3m8g6Tb9pUbcVnQ",
  authDomain: "crwn-db-a9600.firebaseapp.com",
  projectId: "crwn-db-a9600",
  storageBucket: "crwn-db-a9600.appspot.com",
  messagingSenderId: "980464079998",
  appId: "1:980464079998:web:d3a0b15d4c4143328b342f",
  measurementId: "G-K6KF3F2BDL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

