import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJg8ahxFULUKOE2ur5H0h7sVpG8pJ4F0",
  authDomain: "olx-clone-2ed7d.firebaseapp.com",
  projectId: "olx-clone-2ed7d",
  storageBucket: "olx-clone-2ed7d.appspot.com",
  messagingSenderId: "1089752714513",
  appId: "1:1089752714513:web:ddaddb2d007fb36b4110b0",
  measurementId: "G-VSW3RE6PDD",
};

export default firebase.initializeApp(firebaseConfig);
