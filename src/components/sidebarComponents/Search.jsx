import React from "react";
import styles from "./Search.module.css";
import ChatProfile from "./ChatProfile";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Search({ style }) {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [result, setResult] = useState(false);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const search = async () => {
    setErr(false);
    // query to find a user
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("displayName", "==", userName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUsers((prev) => [doc.data()]);
    });
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    search();
    try {
    } catch (error) {
      setErr(true);
    }
  };

  const keydownHandler = async (e) => {
    if (e.code === "Enter") {
      try {
        search();
      } catch (error) {
        setErr(true);
      }
    }
  };

  // selected user
  const selectedUser = async () => {
    // find index of users who found
    const indexUser = users.findIndex((x) => {
      return x.displayName == userName;
    });

    const user = users[indexUser];

    const combineID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    console.log(currentUser.uid);
    console.log(user.uid);

    try {
      const res = await getDoc(doc(db, "chats", combineID));
      if (!res.exists()) {
        // create a Doc if no Exist
        await setDoc(doc(db, "chats", combineID), { massages: [] });

        // update and create messages in Doc

        await updateDoc(doc(db, "userChat", currentUser.uid), {
          [combineID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineID + ".userDate"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChat", user.uid), {
          [combineID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineID + ".userDate"]: serverTimestamp(),
        });
        console.log("updated");
      }
    } catch (error) {}
    setUsers(null);
    setUserName("");
  };
  return (
    <div className={`${styles.search} ${style}  border-bottom `}>
      <div className={`d-flex ${styles.finding} mb-2`}>
        <input
          type="text"
          value={userName}
          className={` mt-0 rounded-0 border-0 p-1`}
          placeholder="Find My Friend"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={keydownHandler}
        />
        <button
          className={`border-0 ${styles.submit} p-3`}
          onClick={searchHandler}
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div className={`${styles.result}`}>
        {users &&
          users.map((friend, index) => (
            <div onClick={selectedUser} key={index}>
              <div className={`${styles.chat_profile} mt-1 p-3 d-flex `}>
                <img src={friend.photoURL} alt="profil" />
                <div className={`${styles.chatField}`}>
                  <span className="ms-2 fw-bold">{friend.displayName}</span>
                  <p className="ms-2 fw-lighter"></p>
                </div>
              </div>
            </div>
          ))}
        {err && <p>No friend Found </p>}
      </div>
    </div>
  );
}

export default Search;
