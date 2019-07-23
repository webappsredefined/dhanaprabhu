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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //Logout

  // console.log(userAuth); // (User Auth gives uid after login)

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot); (Checks whether user exists)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating message", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
