// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq3Np15QUCwo7r0ysCRCqxx9K7-a7Nn3E",
    authDomain: "selfscout-c5715.firebaseapp.com",
    projectId: "selfscout-c5715",
    storageBucket: "selfscout-c5715.appspot.com",
    messagingSenderId: "264417721781",
    appId: "1:264417721781:web:88d326c50d21c37c98edfc",
    measurementId: "G-QJSBXWE3TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
