import React from "react";
import styles from "./Login.module.css";
import { bgRegister } from "../../assets";

const Login = () => (
  <React.Fragment>
    <div className={styles.login_container}>
      <div className={styles.login}>
        <h1 className={styles.judul}>Login</h1>
        <form>
          <input type="text" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <button className={styles.submit}>Login</button>
        </form>
      </div>
    </div>
  </React.Fragment>
);
export default Login;
