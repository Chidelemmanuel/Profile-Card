import React from "react";
import "./style.css";
import Intro from "./intro";
import Skill from "./Skill";
import Image from "../../public/img/passport.jpg";

function WelcomeCard() {
  return (
    <div className="card">
      <img src={Image} alt="" />

      <Intro />
      <Skill />
    </div>
  );
}

export default WelcomeCard;
