
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo9OrNxL9MlurFCRF4lWiwHZsMpWS1GoI",
  authDomain: "e-commerce-180ef.firebaseapp.com",
  projectId: "e-commerce-180ef",
  storageBucket: "e-commerce-180ef.appspot.com",
  messagingSenderId: "554333529615",
  appId: "1:554333529615:web:1dd1d51b26f5fa4323e57a",
  measurementId: "G-HPTTXW2NYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)