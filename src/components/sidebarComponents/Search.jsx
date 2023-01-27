import React from "react";
import styles from "./Search.module.css";
import ChatProfile from "./ChatProfile";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";
import { setLogLevel } from "firebase/app";

function Search({ style }) {
  const [userName, setUserName] = useState("");
  const [userChat, setUserChat] = useState([]);
  const [result, setResult] = useState(false);
  const [err, setErr] = useState(false);

  const searchHandler = async (e) => {
    e.preventDefault();
    // query to find a user
    try {
      const citiesRef = collection(db, "users");
      const q = query(citiesRef, where("displayName", "==", userName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUserChat((prev) => [...prev, doc.data()]);
        console.log(userChat);
      });
      setResult(true);
    } catch (error) {
      setErr(true);
      setResult(false);
    }
  };
  return (
    <div className={`${styles.search} ${style}  border-bottom `}>
      <div className={`d-flex ${styles.finding} mb-2`}>
        <input
          type="text"
          className={` mt-0 rounded-0 border-0 p-1`}
          placeholder="Find My Friend"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className={`border-0 ${styles.submit} p-3`}
          onClick={searchHandler}
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
      {userChat && (
        <div className={`${styles.result}`}>
          {userChat &&
            userChat.map((friend, index) => (
              <ChatProfile
                photoURL={friend.photoURL}
                displayName={friend.displayName}
                key={`user ${index}`}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Search;
