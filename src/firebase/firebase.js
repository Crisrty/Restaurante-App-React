// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbGfmGfrpauJFkJIv74mB0aItxFF9zoXM",
  authDomain: "restaurante-7e59a.firebaseapp.com",
  projectId: "restaurante-7e59a",
  storageBucket: "restaurante-7e59a.appspot.com",
  messagingSenderId: "139112758839",
  appId: "1:139112758839:web:2ac48af5c71437f02fc9b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);