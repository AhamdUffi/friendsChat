import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import styles from "./NavbarChat.module.css";

const NavbarChat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div
      className={`${styles.navbar_chat} d-flex w-full justify-content-between align-items-center p-2`}
    >
      <h6>{data.user?.displayName}</h6>
      <div className={`${styles.navbar_info} d-flex justify-content-evenly`}>
        <button>
          <i class="bi bi-camera-video-fill text-white"></i>
        </button>
        <button>
          <i class="bi bi-person-plus-fill text-white"></i>
        </button>
        <button>
          <i class="bi bi-three-dots text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default NavbarChat;
