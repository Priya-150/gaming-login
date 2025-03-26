import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("User Registered Successfully"))
        .catch(error => alert(error.message));
}

function logout() {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    });
}

window.login = login;
window.register = register;
window.logout = logout;
