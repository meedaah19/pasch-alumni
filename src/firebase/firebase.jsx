// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB09jD0-ezcFKShH16Pxg5L3DIZ7Mx5rig",
  authDomain: "pasch-alumni-11512.firebaseapp.com",
  projectId: "pasch-alumni-11512",
  storageBucket: "pasch-alumni-11512.firebasestorage.app",
  messagingSenderId: "1063413152141",
  appId: "1:1063413152141:web:ea47a06b4648614ce8a5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};