import React from "react";
import styles from "./Register.module.css";
import { bgRegister } from "../../assets";

const Register = () => {
  return (
    <div
      className={styles.register_container}
      style={{ backgroundImage: bgRegister }}
    >
      <div className={styles.register}>
        <h1 className={styles.judul}>register</h1>
        <form>
          <input type="text" placeholder="Your Name" className={styles} />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your Password" />
          <label htmlFor="file">
            <span>🖼️</span>
            <span>Add an avatar</span>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />

          <button className={styles.submit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
