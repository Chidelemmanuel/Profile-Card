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
      <SkillList skillone={"HTML+CSS"} skilltwo={"TYPESCRIPT"} one="color" />
      <SkillList skillone={"JAVASCRIPT"} skilltwo={"REACTJS"} />
      <SkillList skillone={"VANILLA JS"} skilltwo={"GIT & GITHUB"} />
    </div>
  );
}

export default WelcomeCard;
