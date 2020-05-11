import React from "react";
import "./GameProjects.scss";
import Project from "../Project/Project";

export default function GameProjects(props) {
  const allProjects =
    projectData &&
    projectData.map((project, index) => {
      return (
        <Project
          constructed={project.constructed}
          key={index}
          project={project}
        />
      );
    });

  return (
    <div className="gameProjectsPage" id="gameProjects">
      <h2>Game Development Projects</h2>
      <div className="projects">{allProjects}</div>
    </div>
  );
}

const projectData = [
  {
    title: "Frog in the Star Pajamas",
    description:
      "Frog in the Star Pajamas is a 2D platformer where you play as a frog who wants to find his pajamas so he can finally rest.",
    image: "/images/projects/FrogInTheStarPajamas.png",
    github: "https://imgur.com/a/M3l1xFh",
    stack: "Built in Unity (C#)",
    constructed: true,
  },
  {
    title: "Old Folks Tavern",
    description:
      "Frog in the Star Pajamas is a 2D platformer where you play as a frog who wants to find his pajamas so he can finally rest.",
    image: "/images/projects/FrogInTheStarPajamas.png",
    github: "https://imgur.com/a/M3l1xFh",
    stack: "Built in Unity (C#)",
    constructed: false,
  },
];
