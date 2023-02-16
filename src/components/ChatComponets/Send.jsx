import React, { useContext, useMemo, useState } from "react";
import styles from "./Send.module.css";
import {
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app, db } from "../../firebase";
import { ChatContext } from "../../context/ChatContext";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../context/AuthContext";

const Send = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  // console.log(data.chatsUID);

  const sendHandler = async () => {
    if (img) {
      const storage = useMemo(() => {
        return getStorage(app);
      }, [app]);
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, img);
      getDownloadURL(storageRef)
        .then(async (url) => {
          await updateDoc(doc(db, "chats", data.chatsUID), {
            massages: arrayUnion({
              id: uuid(),
              text,
              img: url,
              sendId: currentUser.uid,
              date: Timestamp.now(),
            }),
          });
        })
        .catch((error) => {});
    } else {
      await updateDoc(doc(db, "chats", data.chatsUID), {
        massages: arrayUnion({
          id: uuid(),
          text,
          sendId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChat", currentUser.uid), {
      [data.chatsUID + ".lastMassage"]: {
        text,
      },
      [data.chatsUID + ".userDate"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChat", data.user.uid), {
      [data.chatsUID + ".lastMassage"]: {
        text,
      },
      [data.chatsUID + ".userDate"]: serverTimestamp(),
    });
    setImg(null);
    setText("");
  };
  return (
    <div className={`${styles.send} d-flex bg-dark p-2`}>
      <input
        type="text"
        placeholder="Type Something here..."
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className={`${styles.more}`}>
        <input
          type="file"
          id="file"
          className="d-none"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file" className="ms-2">
          <i class="bi bi-image-fill text-white"></i>
        </label>
        <button
          className={`${styles.button} border-0 ms-2`}
          onClick={sendHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Send;
