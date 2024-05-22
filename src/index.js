import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Tailwind",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
      {skills.map((skill) => (
        <Skill skillsObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillsObj }) {
  const style = { backgroundColor: skillsObj.color };
  return (
    <div className="skill" style={style}>
      <span>{skillsObj.skill}</span>
      <span>
        {skillsObj.level === "beginner" && "👶"}
        {skillsObj.level === "intermediate" && "👍"}
        {skillsObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./Avatar/congrat.gif" alt="Toyyib" />;
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
