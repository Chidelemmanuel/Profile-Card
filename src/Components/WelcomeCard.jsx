import React from "react";
import "./style.css";
import Intro from "./intro";
import Image from "../../public/img/passport.jpg";
import SkillList from "./SkillList";

function WelcomeCard() {
  const WelcomeCard = {
    name: "OZOCHI EMMANUEL",
    bio: "I’m a frontend engineer with a solid grasp of HTML, CSS, JavaScript(ES6+), and React. I enjoy building clean, responsive, and user-friendly interfaces. I focus on writing maintainable code, improving performance, and staying current with modern frontend trends. I’m excited to contribute to teams that value great design and thoughtful development.",
  };

  return (
    <div className="card">
      <img src={Image} alt="" />

      <Intro
        name={WelcomeCard.name}
        bio={WelcomeCard.bio}
        role={WelcomeCard.role}
      />

      <SkillList skillone={"HTML+CSS"} skilltwo={"TYPESCRIPT"} one="color" />
      <SkillList skillone={"JAVASCRIPT"} skilltwo={"REACTJS"} />
      <SkillList skillone={"VANILLA JS"} skilltwo={"GIT & GITHUB"} />
    </div>
  );
}

export default WelcomeCard;
