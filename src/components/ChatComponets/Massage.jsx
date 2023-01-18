import React from "react";
import styles from "./Massage.module.css";
import MainChat from "./MassageComponets/MainChat";

const Massage = () => {
  return (
    <div className={`${styles.massage}`}>
      <MainChat />
      <MainChat />
      <MainChat />
      <MainChat />
      <MainChat />
      <MainChat />
    </div>
  );
};

export default Massage;
