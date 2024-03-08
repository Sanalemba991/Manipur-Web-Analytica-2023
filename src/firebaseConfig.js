// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJoPOSWpqRJRCGEuGcp5BwT_RH_U3Npzs",
  authDomain: "mca-project-16b87.firebaseapp.com",
  projectId: "mca-project-16b87",
  storageBucket: "mca-project-16b87.appspot.com",
  messagingSenderId: "689412678903",
  appId: "1:689412678903:web:35cdefdb259816805bdff2",
  measurementId: "G-0VT41HRZ5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 export const database =getFirestore(app)
