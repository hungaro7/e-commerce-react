// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpfdQRcyVse_byEs8s2H5es6Rw7WdnQRU",
  authDomain: "adrishop-2800c.firebaseapp.com",
  projectId: "adrishop-2800c",
  storageBucket: "adrishop-2800c.firebasestorage.app",
  messagingSenderId: "358108218240",
  appId: "1:358108218240:web:171569350242f638537765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);