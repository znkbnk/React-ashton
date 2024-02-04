// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU0PUXuIdAK79kWIstjMgyXODiF20NrmY",
  authDomain: "ashtonandmoore.firebaseapp.com",
  projectId: "ashtonandmoore",
  storageBucket: "ashtonandmoore.appspot.com",
  messagingSenderId: "575531986856",
  appId: "1:575531986856:web:d3b0139acd0a497859f79d",
  measurementId: "G-Y8M78NTS9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
