import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Firebase configuration from firebase console
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const projStorage = firebase.storage();
const projFirestore = firebase.firestore();

export { projFirestore, projStorage };
