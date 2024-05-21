import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" background="blue" />
      <Skill skill="JavaScript" emoji="💪" background="yellow" />
      <Skill skill="Web Design" emoji="💪" background="grey" />
      <Skill skill="Git & GitHub" emoji="👍" background="orangered" />
      <Skill skill="React" emoji="👍" background="#123456" />
      <Skill skill="Tailwind" emoji="👽" background="red" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.background };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./Avatar/congrat.gif" alt="Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Oyefolu Toyyib</h1>
      <p>
        Front-end Web Developer and student at Florintech Computer College Ojo,
        Lagos. When not coding or building a project, I like to read books
        related to coding, cook and eat because I eat a lot, or just watch movie
        and listen to music when depressed.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
