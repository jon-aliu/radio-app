// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getDatabase} from "firebase/database"
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD2Sq-u9i0zsJVx-eGSxgvnzLsdnT-nj3s",
  authDomain: "micon-8a605.firebaseapp.com",
  projectId: "micon-8a605",
  storageBucket: "micon-8a605.appspot.com",
  messagingSenderId: "290540994274",
  appId: "1:290540994274:web:0f99e91165cfd802e1e8bb",
  measurementId: "G-2VPKKE5495",
  databaseURL:"https://micon-8a605-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export default app;
