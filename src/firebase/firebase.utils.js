import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi5iN835xcdMVu9ORTv1rfN94Fke2o7hg",
  authDomain: "dhana-prabhu.firebaseapp.com",
  databaseURL: "https://dhana-prabhu.firebaseio.com",
  projectId: "dhana-prabhu",
  storageBucket: "",
  messagingSenderId: "627343268188",
  appId: "1:627343268188:web:3777958af6b38d7c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
