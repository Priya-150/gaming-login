import { auth, googleProvider } from "./firebase.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function register() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("User Registered Successfully!");
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function loginWithGoogle() {
    signInWithPopup(auth, googleProvider)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function logout() {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    }).catch(error => alert(error.message));
}

window.login = login;
window.register = register;
window.logout = logout;
window.loginWithGoogle = loginWithGoogle;

