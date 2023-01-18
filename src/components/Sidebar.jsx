import React from "react";
import AllChat from "./sidebarComponents/AllChat";
import Navbar from "./sidebarComponents/Navbar";
import Search from "./sidebarComponents/Search";
import styles from "./Sidebar.module.css";

const Sidebar = ({ style }) => {
  return (
    <div className={`${style} ${styles.sidebar} bg-dark text-white`}>
      <Navbar />
      <Search />
      <AllChat />
    </div>
  );
};

export default Sidebar;
