import React from "react";
import { reza } from "../../../assets";
import styles from "./MainChat.module.css";

const MainChat = () => {
  return (
    <div className={`${styles.mainChat} ${styles.owner}`}>
      <div className={`${styles.profil}`}>
        <img src={reza} alt="reza" />
      </div>
      <div className={`${styles.chatInfo}`}>
        <span>Just Now</span>
        <img src={reza} alt="" />
        <p>Hai, How are You ?</p>
      </div>
    </div>
  );
};

export default MainChat;
