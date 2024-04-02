// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOog_cjzL7yeEtf90B-v358wroj6laZWA",
  authDomain: "password-verify-4be53.firebaseapp.com",
  projectId: "password-verify-4be53",
  storageBucket: "password-verify-4be53.appspot.com",
  messagingSenderId: "165658683747",
  appId: "1:165658683747:web:997637f473379327318b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;