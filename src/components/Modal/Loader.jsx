import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader_logo}>
        <div className={styles.right}></div>
        <div className={styles.left}></div>
        <div className={styles.loader_title}>
          <span>F</span>
          <span>R</span>
          <span>I</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
          <span>S</span>
        </div>
        <div className={styles.loader_title2}>CHAT</div>
      </div>
    </div>
  );
};

export default Loader;
