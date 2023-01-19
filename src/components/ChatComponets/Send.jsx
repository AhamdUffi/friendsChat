import React from "react";
import styles from "./Send.module.css";

const Send = () => {
  return (
    <div className={`${styles.send} d-flex bg-dark p-2`}>
      <input
        type="text"
        placeholder="Type Something here..."
        className={styles.input}
      />
      <div className={`${styles.more}`}>
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
