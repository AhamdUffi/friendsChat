import React from "react";
import Massage from "./ChatComponets/Massage";
import NavbarChat from "./ChatComponets/NavbarChat";
import Send from "./ChatComponets/Send";
import styles from "./Chat.module.css";
import MainChat from "./ChatComponets/MassageComponets/MainChat";

const Chat = ({ style }) => {
  return (
    <div
      className={`${style} ${styles.chat} d-flex flex-column justify-content-between`}
    >
      <NavbarChat style={`${styles.navbar_chat}`} />
      <Massage />
      <Send style={`${styles.Send}`} />
    </div>
  );
};

export default Chat;
