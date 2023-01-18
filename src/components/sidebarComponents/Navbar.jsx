import React from "react";
import styles from "./Navbar.module.css";
import { profil1 } from "../../assets";

const Navbar = ({ style }) => {
  return (
    <div className={`${style} ${styles.navbar}`}>
      <div
        className={`${styles.container} d-flex p-2 justify-content-around align-items-center`}
      >
        <div className={styles.title}>
          <h6>Super Chat</h6>
        </div>
        <div
          className={`${styles.profil} d-md-flex align-items-center gap-3 ms-1`}
        >
          <div>
            <img src={profil1} alt="profile" />
            <span>Ahmad Uffi</span>
          </div>

          <button className={`${styles.logout} border-0 ms-2 p-1 rounded-pill`}>
            logOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
