import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlCRAeLS5TdcwBVhP5UpTwXqZRMiQvBCM",
  authDomain: "login-page-dd0ad.firebaseapp.com",
  projectId: "login-page-dd0ad",
  storageBucket: "login-page-dd0ad.firebasestorage.app",
  messagingSenderId: "878546626243",
  appId: "1:878546626243:web:3d08e40b014dcbace92476",
  measurementId: "G-FL64FB42VW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

