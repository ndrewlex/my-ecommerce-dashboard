import { initializeApp } from "firebase/app";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEd5l6TAD_iYFOxKoPyWRzltyjfPHeQx0",
  authDomain: "my-ecommerce-ce75a.firebaseapp.com",
  projectId: "my-ecommerce-ce75a",
  storageBucket: "my-ecommerce-ce75a.appspot.com",
  messagingSenderId: "942735355529",
  appId: "1:942735355529:web:da6913fd1d09794470e058",
};

export const firebaseApp = initializeApp(firebaseConfig);
