import React from "react";
import "./WebProjects.scss";
import Project from "../Project/Project";

export default function WebProjects(props) {
  const allProjects =
    projectData &&
    projectData.map((project, index) => {
      return <Project key={index} project={project} />;
    });

  return (
    <div className="webProjectsPage" id="webProjects">
      <h2>Web Development Projects</h2>
      <div className="projects">{allProjects}</div>
    </div>
  );
}

const projectData = [
  {
    title: "Side Quests",
    description:
      "SideQuests is a web app which facilitates helping people in need, solving current world issues on a small scale with a fun fantasy theme.",
    image: "/images/projects/SideQuests.PNG",
    github: "https://github.com/FelixPriori/side-quests",
    stack: "React, Express, NodeJS and PostgreSQL",
  },
  {
    title: "Scheduler",
    description:
      "Scheduler is a one-page application that allows you to match students with mentors to schedule interviews for the week.",
    image: "/images/projects/Scheduler.png",
    github: "https://github.com/smalboeuf/scheduler",
    stack: "React, Express, NodeJS",
  },
  {
    title: "Hooked",
    description:
      "A multi page website where users can post links and content of their choice for other people to see and interact with.",
    image: "/images/projects/Hooked.png",
    github: "https://github.com/smalboeuf/hooked",
    stack: "Express, Node, PostgreSQL",
  },
  {
    title: "Tweeter",
    description: "weeter is a simple, single-page Twitter clone.",
    image: "/images/projects/Tweeter.png",
    github: "https://github.com/smalboeuf/tweeter",
    stack: "Express, JQuery, Node",
  },
];
