import React from "react";
import styles from "./Send.module.css";

const Send = () => {
  return (
    <div className={`${styles.send} d-flex bg-dark`}>
      <input
        type="text"
        placeholder="Type Something here..."
        className={styles.input}
      />
      <div className={`${styles.more}`}>
        <i class="bi bi-paperclip text-white mt-3 ms-2"></i>
        <input type="file" id="file" className="d-none" />
        <label htmlFor="file" className="ms-2">
          <i class="bi bi-image-fill text-white"></i>
        </label>
        <button className={`${styles.button} border-0 ms-2`}>Send</button>
      </div>
    </div>
  );
};

export default Send;
