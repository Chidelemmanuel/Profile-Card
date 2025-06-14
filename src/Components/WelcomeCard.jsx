import React from "react";
import "./style.css";
import Intro from "./intro";
import Image from "../../public/img/passport.jpg";
import SkillList from "./SkillList";

function WelcomeCard() {
  return (
    <div className="card">
      <img src={Image} alt="" />

      <Intro />
      <SkillList />
    </div>
  );
}

export default WelcomeCard;
