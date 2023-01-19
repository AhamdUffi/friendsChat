import React from "react";
import Chat from "../../components/Chat";
import Sidebar from "../../components/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div
      className={`${styles.home} d-flex justify-content-center align-items-center`}
    >
      <div className={`${styles.container} d-flex p-l flex-column flex-sm-row`}>
        <Sidebar style={`${styles.sidebar} `} />
        <Chat style={`${styles.chat} `} />
      </div>
    </div>
  );
};

export default Home;
