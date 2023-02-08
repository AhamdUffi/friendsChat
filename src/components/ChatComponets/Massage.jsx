import React from "react";
import { useContext } from "react";
import styles from "./Massage.module.css";
import MainChat from "./MassageComponets/MainChat";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ChatContext } from "../../context/ChatContext";

const Massage = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.uid), (doc) => {
      doc.exists() && setMessages(doc.data().massages);
    });

    return () => {
      unSub();
    };
  }, [data.uid]);

  return (
    <div className={`${styles.massage}`}>
      {messages?.map((m, index) => (
        <Massage key={index} messages={m} />
      ))}
    </div>
  );
};

export default Massage;
