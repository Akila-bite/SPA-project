// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBMOfU8RFaunK-DbuwZiyFgLet2BqhiJDE",
//   authDomain: "spa-project-ab84a.firebaseapp.com",
//   projectId: "spa-project-ab84a",
//   storageBucket: "spa-project-ab84a.firebasestorage.app",
//   messagingSenderId: "477358944631",
//   appId: "1:477358944631:web:f89a24d8083df33accf172",
//   measurementId: "G-J85FPRSB2Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {store} from "./app/store"; 
import { setUser, logoutUser } from "./app/userSlice"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOfU8RFaunK-DbuwZiyFgLet2BqhiJDE",
  authDomain: "spa-project-ab84a.firebaseapp.com",
  projectId: "spa-project-ab84a",
  storageBucket: "spa-project-ab84a.firebasestorage.app",
  messagingSenderId: "477358944631",
  appId: "1:477358944631:web:f89a24d8083df33accf172",
  measurementId: "G-J85FPRSB2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔹 Listen for Firebase authentication state changes and update Redux
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setUser({ uid: user.uid, email: user.email })); // Set user info
  } else {
    store.dispatch(logoutUser()); // Ensure state is properly cleared
  }
});

// Function to handle user logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
