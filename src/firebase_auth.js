import firbase from "firebase/compat/app"
// import { initializeApp } from "firebase/app";
// import "firebase/auth"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNxSL9-7UDoFqf8eusw_SRr18upnCoaF0",
  authDomain: "app-production-f12f3.firebaseapp.com",
  projectId: "app-production-f12f3",
  storageBucket: "app-production-f12f3.appspot.com",
  messagingSenderId: "326391650121",
  appId: "1:326391650121:web:f92c7e9156942258302c98"
};

// // Initialize Firebase
const app = firbase.initializeApp(firebaseConfig);


// const app = firbase.initializeApp({
//     apiKey : process.env.FIREBASE_API_KEY,
//     authDomain : process.env.FIREBASE_AUTH_DOMAIN,
//     projectId : process.env.FIREBASE_PROJECT_ID,
//     storageBucket : process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId : process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId : process.env.FIREBASE_APP_ID,
// })

export const auth = app.auth()
export const db = app.firestore()
export default app;
