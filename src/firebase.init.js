// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTkiB1fiXnM0vPj7Ce5gZLdhJcNPr7BM0",
  authDomain: "fitness-power-gym.firebaseapp.com",
  projectId: "fitness-power-gym",
  storageBucket: "fitness-power-gym.appspot.com",
  messagingSenderId: "1012385898711",
  appId: "1:1012385898711:web:0af2544cef7d36d66d5092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth