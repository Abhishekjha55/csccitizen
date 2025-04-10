// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyD3Fu7JWwL_oJ-k7diJdZ9o1UrZcJlowus",
  authDomain: "az-csc.firebaseapp.com",
  projectId: "az-csc",
  storageBucket: "az-csc.firebasestorage.app",
  messagingSenderId: "393401202661",
  appId: "1:393401202661:web:d4315e7d6efa04f4b2e10c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// फंक्शंस
function showForm(form) {
  document.getElementById("loginForm").style.display = form === "login" ? "block" : "none";
  document.getElementById("signupForm").style.display = form === "signup" ? "block" : "none";
  document.getElementById("loginBtn").classList.toggle("active", form === "login");
  document.getElementById("signupBtn").classList.toggle("active", form === "signup");
}

function showLoader(show) {
  document.getElementById("loader").style.display = show ? "flex" : "none";
}

function handleLogin(event) {
  event.preventDefault();
  showLoader(true);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      showLoader(false);
      alert("लॉगिन सफल!");
    })
    .catch(error => {
      showLoader(false);
      alert("लॉगिन विफल: " + error.message);
    });
}

function handleSignup(event) {
  event.preventDefault();
  showLoader(true);
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    showLoader(false);
    alert("पासवर्ड मेल नहीं खाते!");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      showLoader(false);
      alert("साइनअप सफल!");
    })
    .catch(error => {
      showLoader(false);
      alert("साइनअप विफल: " + error.message);
    });