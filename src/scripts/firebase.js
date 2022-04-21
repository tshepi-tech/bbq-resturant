//NPM packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//properties
const firebaseConfig = {
  apiKey: "AIzaSyC99yGi7yRfAuRe8oR12tPHrYMSr2282j0",
  authDomain: "bbq-resturant.firebaseapp.com",
  projectId: "bbq-resturant",
  storageBucket: "bbq-resturant.appspot.com",
  messagingSenderId: "393706512008",
  appId: "1:393706512008:web:1626937e45d8d45652c93d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
