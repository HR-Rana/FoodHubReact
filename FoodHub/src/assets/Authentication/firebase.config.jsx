// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.FIREBASE_APIKYE);
console.log(import.meta.env.VITE_SOME_KEY);
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_APIKYE,
	authDomain: "foodhub-75b54.firebaseapp.com",
	projectId: "foodhub-75b54",
	storageBucket: "foodhub-75b54.appspot.com",
	messagingSenderId: "533440270219",
	appId: "1:533440270219:web:9204119c0ad4c76cb6298e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
