import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEYzZ9sBocBTU8ffFeufDYEsauEaGmK_c",
  authDomain: "friends-chat-8027b.firebaseapp.com",
  projectId: "friends-chat-8027b",
  storageBucket: "friends-chat-8027b.appspot.com",
  messagingSenderId: "151820505207",
  appId: "1:151820505207:web:221214fc10ace73bbdb672",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
