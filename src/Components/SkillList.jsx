function SkillList(props) {
  return (
    <div className="skill">
      <section className="first">
        <span className="one">{props.skillone}</span>
      </section>

      <section className="second">
        <span className="four">{props.skilltwo}</span>
      </section>
    </div>
  );
}

export default SkillList;
