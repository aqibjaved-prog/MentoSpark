// Import Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD8qGst9qIE_doHHAoA4RXaeIfDEw53XA",
  authDomain: "mentospark-23ad1.firebaseapp.com",
  projectId: "mentospark-23ad1",
  storageBucket: "mentospark-23ad1.appspot.com",
  messagingSenderId: "164763516722",
  appId: "1:164763516722:web:8907112c1b6ad4e6f2212b",
  measurementId: "G-1WXM0GBW68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
window.signup = function () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful");
      window.location.href = "login.html";
    })
    .catch(error => {
      alert("Signup error: " + error.message);
    });
};

// Login
window.login = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Login error: " + error.message);
    });
};
