import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { profil1 } from "../../assets";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ style }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {}
  };
  return (
    <div className={`${style} ${styles.navbar}`}>
      <div
        className={`${styles.container} d-flex p-2 justify-content-around align-items-center`}
      >
        <div className={styles.title}>
          <h6>Friends Chat</h6>
        </div>
        <div
          className={`${styles.profil} d-md-flex align-items-center gap-3 ms-1`}
        >
          <div>
            <img src={currentUser.photoURL} alt="profile" />
            <span>{currentUser.displayName}</span>
          </div>

          <button
            className={`${styles.logout} border-0 ms-2 p-1 rounded-pill`}
            onClick={logoutHandler}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
