import React from "react";
import ChatProfile from "./ChatProfile";
import styles from "./AllChat.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const AllChat = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { data, dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelected = async (user) => {
    await dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className={`${styles.allChat}`}>
      {Object.entries(chats).map((chat, index) => (
        <ChatProfile
          key={index}
          displayName={chat[1].userInfo.displayName}
          photoURL={chat[1].userInfo.photoURL}
          lastMassage={chat[1].lastMassage?.text}
          onClick={() => handleSelected(chat[1].userInfo)}
        />
      ))}
    </div>
  );
};

export default AllChat;
