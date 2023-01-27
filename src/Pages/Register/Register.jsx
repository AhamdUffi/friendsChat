import React, { useState } from "react";
import styles from "./Register.module.css";
import { bgRegister } from "../../assets";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, app, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  // error handler
  const [err, setErr] = useState(false);
  // navigate Handler
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      setErr(false);
      // create account
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // upload foto
      const storage = getStorage(app);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          console.log("error upload");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // make document for user
            await setDoc(doc(db, "users", res.user.uid), {
              displayName,
              photoURL: downloadURL,
              email,
            });
            // make document for freinds
            await setDoc(doc(db, "userChat", res.user.uid), {});
            navigate("/login");
          });
        }
      );
    } catch (error) {
      setErr(true);
    }
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
          {err && <p>Something wrong</p>}

          <p>
            Have a Account <Link to={"/register"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
