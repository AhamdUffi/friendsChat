import React from "react";
import ReactDom from "react-dom";
import Loader from "./Loader";
import styles from "./Modal.module.css";
const Modal = () => {
  const BackDrop = () => {
    return (
      <div className={styles.backdrop}>
        <Loader />
      </div>
    );
  };

  const portal = document.getElementById("modal");
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop />, portal)}
    </React.Fragment>
  );
};

export default Modal;
