import React from "react";
import "./style.css";
import Intro from "./intro";
import SkillList from "./SkillList";

function WelcomeCard() {
  return (
    <div className="card">
      <img src="img/passport.jpg" alt="" />

      <Intro />
      <SkillList />
    </div>
  );
}

export default WelcomeCard;
