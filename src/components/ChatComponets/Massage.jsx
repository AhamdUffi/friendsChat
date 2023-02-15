import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import styles from "./Massage.module.css";
import MainChat from "./MassageComponets/MainChat";

const Massage = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatsUID), (doc) => {
      doc.exists() && setMessages(doc.data().massages);
    });
    return () => {
      unsub();
    };
  }, [data.chatsUID]);

  return (
    <div className={`${styles.massage}`}>
      {messages.map((message, index) => (
        <MainChat messages={message} key={message.id} />
      ))}
    </div>
  );
};

export default Massage;
