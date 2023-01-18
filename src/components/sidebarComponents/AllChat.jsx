import React from "react";
import ChatProfile from "./ChatProfile";
import styles from "./AllChat.module.css";

const AllChat = () => {
  return (
    <div className={`${styles.allChat}`}>
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
    </div>
  );
};

export default AllChat;
