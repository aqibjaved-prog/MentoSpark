import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

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
const storage = getStorage(app);

const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const userEmail = document.getElementById("user-email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.textContent = "Logged in as: " + user.email;
    listUserFiles(user.uid);
  } else {
    window.location.href = "login.html";
  }
});

window.uploadFile = async function () {
  const user = auth.currentUser;
  const file = fileInput.files[0];
  if (!file || !user) return alert("Select a file first.");

  const fileRef = ref(storage, users/${user.uid}/${file.name});
  await uploadBytes(fileRef, file);
  alert("File uploaded!");
  listUserFiles(user.uid);
};

async function listUserFiles(uid) {
  const folderRef = ref(storage, users/${uid});
  const result = await listAll(folderRef);
  fileList.innerHTML = "";
  result.items.forEach(async (itemRef) => {
    const url = await getDownloadURL(itemRef);
    const li = document.createElement("li");
    li.innerHTML = <a href="${url}" target="_blank">${itemRef.name}</a>;
    fileList.appendChild(li);
  });
}

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
