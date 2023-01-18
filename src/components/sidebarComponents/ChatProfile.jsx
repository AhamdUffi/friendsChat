import React from "react";
import styles from "./ChatProfile.module.css";
import { profil1 } from "../../assets";

const ChatProfile = () => {
  return (
    <div>
      <div className={`${styles.chat_profile} mt-1 p-3 d-flex `}>
        <img src={profil1} alt="profil" />
        <div className={`${styles.chatField}`}>
          <span className="ms-2 fw-bold">John</span>
          <p className="ms-2 fw-lighter">
            Hello, How's life Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias animi minus esse perferendis ratione ab excepturi id aut
            nisi incidunt modi odio unde beatae, odit voluptatibus totam facere!
            Inventore magnam officia magni, totam, tenetur eos dicta rem ducimus
            nostrum doloribus aliquid nihil nobis ad id nisi culpa distinctio,
            temporibus dolorum quasi cumque iure aspernatur illo? Facere fugit
            maiores, eum error atque consequuntur blanditiis pariatur maxime
            quibusdam excepturi eos qui ut explicabo illo molestiae iste et
            recusandae libero eaque nam sapiente. Nemo vel exercitationem ad
            corporis accusantium quae excepturi iusto dolorem repellendus
            consequatur sint, praesentium dicta tenetur natus. Nesciunt, maiores
            at!
          </p>
        </div>
      </div>
      {/* pembatas */}
    </div>
  );
};

export default ChatProfile;
