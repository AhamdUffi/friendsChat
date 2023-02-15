import React, { useContext, useEffect, useRef } from "react";
import { reza } from "../../../assets";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import Massage from "../Massage";
import styles from "./MainChat.module.css";

const MainChat = ({ messages }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={`${styles.mainChat} ${
        currentUser.uid === messages.sendId && styles.owner
      }`}
      ref={ref}
    >
      <div className={`${styles.profil}`}>
        <img
          loading="lazy"
          src={
            currentUser.uid === messages.sendId
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="reza"
        />
      </div>
      <div className={`${styles.chatInfo}`}>
        <span>Just Now</span>
        <p>{messages.text}</p>
        {messages.img && <img src={messages.img} alt="" />}
      </div>
    </div>
  );
};

export default MainChat;
