// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgBSa6sMgMI0wSbKLQwqjDdcX6KdfbxUQ",
  authDomain: "chatt-e0958.firebaseapp.com",
  projectId: "chatt-e0958",
  storageBucket: "chatt-e0958.appspot.com",
  messagingSenderId: "45246709819",
  appId: "1:45246709819:web:779a1014b0c42ac52bdc1e",
  measurementId: "G-T1N4GRCN7P"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
