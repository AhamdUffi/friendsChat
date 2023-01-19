import React, { useState } from "react";
import styles from "./Register.module.css";
import { bgRegister } from "../../assets";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const Register = () => {
  const [err, setErr] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // create account
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // upload foto
    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      (error) => {},
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName: displayName,
            photoURL: downloadURL,
          });
          const db = getFirestore();

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
        });
      }
    );
  };

  return (
    <div
      className={styles.register_container}
      style={{ backgroundImage: bgRegister }}
    >
      <div className={styles.register}>
        <h1 className={styles.judul}>register</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Your Name" className={styles} />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your Password" />
          <label htmlFor="file">
            <span>🖼️</span>
            <span>Add an avatar</span>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <button className={styles.submit}>Register</button>
          {err && <p>error upload image</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
