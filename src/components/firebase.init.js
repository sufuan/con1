// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJWdNmyCATSDEypUcixS7JSQxK6xhfT_8",
  authDomain: "self-practice-d3deb.firebaseapp.com",
  projectId: "self-practice-d3deb",
  storageBucket: "self-practice-d3deb.appspot.com",
  messagingSenderId: "292682300353",
  appId: "1:292682300353:web:735072b287d3a827ca4d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app