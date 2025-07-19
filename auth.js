// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAD8qGst9qIE_doHHAoA4RXaeIfDEw53XA",
  authDomain: "mentospark-23ad1.firebaseapp.com",
  projectId: "mentospark-23ad1",
  storageBucket: "mentospark-23ad1.appspot.com",
  messagingSenderId: "164763516722",
  appId: "1:164763516722:web:8907112c1b6ad4e6f2212b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
window.signup = function () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      window.location.href = "login.html"; // redirect to login
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
}

// Login Function
window.login = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // your next page
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}
