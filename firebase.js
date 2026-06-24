import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3GY3K639rzGUpF345VOxHMr_37GBYxWg",
    authDomain: "pai-learning-centre.firebaseapp.com",
    projectId: "pai-learning-centre",
    storageBucket: "pai-learning-centre.firebasestorage.app",
    messagingSenderId: "908265175136",
    appId: "1:908265175136:web:cbdccb6784c1359e236b05"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

window.auth = auth;
window.db = db;

window.createUserWithEmailAndPassword =
    createUserWithEmailAndPassword;

window.signInWithEmailAndPassword =
    signInWithEmailAndPassword;

window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;