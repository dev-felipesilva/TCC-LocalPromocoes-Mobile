// Firebase initialization - use the provided config.
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDybau7OjKqGGMdoYPNGKbyrtbStyfILUs",
  authDomain: "local-promocoes-app.firebaseapp.com",
  projectId: "local-promocoes-app",
  storageBucket: "local-promocoes-app.firebasestorage.app",
  messagingSenderId: "890513507821",
  appId: "1:890513507821:web:e4b43f23e51c5f8b70d3e4",
  measurementId: "G-854WN9ZQG0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);