import React from "react";
import {AiOutlineGithub} from 'react-icons/ai'

const Nothing = () => {
  return (
    <div className="nothing__container">
      <p>
        click one list to show it <br />
        you also can visit github to see this project
      </p>
      <a target="blank" href="https://github.com/Blopaa/online-lists-frontend">
      <AiOutlineGithub className="pointer" style={{fontSize:"30px"}}/>
      </a>
      <p>created with love {"<3"}</p>
    </div>
  );
};

export default Nothing;
