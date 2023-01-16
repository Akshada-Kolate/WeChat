import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKeWuMW1wnLmAtsnKq33Mb4noYkqQjbUc",
    authDomain: "social-7b654.firebaseapp.com",
    projectId: "social-7b654",
    storageBucket: "social-7b654.appspot.com",
    messagingSenderId: "972756965496",
    appId: "1:972756965496:web:34fa557fd40728f279f58d",
    measurementId: "G-TB9TFQX3RW"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();