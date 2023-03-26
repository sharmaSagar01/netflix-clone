import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBS9qBY2IdOhQ_44fLsu7b31oQOQVe3m0",
  authDomain: "netflix-build-clone-54662.firebaseapp.com",
  projectId: "netflix-build-clone-54662",
  storageBucket: "netflix-build-clone-54662.appspot.com",
  messagingSenderId: "1089968179740",
  appId: "1:1089968179740:web:c55227c10d23b145482dd9",
  measurementId: "G-ZCQ3V3FFB2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
