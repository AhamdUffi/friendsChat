import React from "react";
import styles from "./ChatProfile.module.css";
import { profil1 } from "../../assets";

const ChatProfile = ({ displayName, photoURL, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={`${styles.chat_profile} mt-1 p-3 d-flex `}>
        <img src={photoURL} alt="profil" />
        <div className={`${styles.chatField}`}>
          <span className="ms-2 fw-bold">{displayName}</span>
          <p className="ms-2 fw-lighter"></p>
        </div>
      </div>
      {/* pembatas */}
    </div>
  );
};

export default ChatProfile;
