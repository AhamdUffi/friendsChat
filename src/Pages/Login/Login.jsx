import React, { useState } from "react";
import styles from "./Login.module.css";
import { bgRegister } from "../../assets";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setErr] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    setErr(false);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log("navigate");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <React.Fragment>
      <div className={styles.login_container}>
        <div className={styles.login}>
          <h1 className={styles.judul}>Login</h1>
          <form onSubmit={submitHandler}>
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Your Password" />
            <button className={styles.submit} type="submit">
              Login
            </button>
          </form>
          {error && <p>Account Not Found </p>}

          <p>
            You Don't Have an Account, <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
