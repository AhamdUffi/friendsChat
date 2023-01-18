import React from "react";
import styles from "./Search.module.css";
import ChatProfile from "./ChatProfile";

function Search({ style }) {
  return (
    <div className={`${styles.search} ${style}  border-bottom `}>
      <div className={`d-flex ${styles.finding}`}>
        <input
          type="text"
          className={` mt-0 rounded-0 border-0`}
          placeholder="find my friend"
        />
        <button className={`border-0 ${styles.submit} p-3`}>
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div className={`${styles.result}`}>
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
      </div>
    </div>
  );
}

export default Search;
