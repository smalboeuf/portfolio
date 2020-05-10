import React from "react";
import "./Project.scss";

export default function Project(props) {
  return (
    <div className="project">
      <h4 className="projectTitle">{props.project.title}</h4>
      <img
        alt="Project"
        className="projectImage"
        src={props.project.image}
      ></img>
      <div className="projectInfo">
        <p className="projectDescription">{props.project.description}</p>
        <p>Stack: {props.project.stack}</p>

        {props.project.github ? (
          <a href={props.project.github}>Github</a>
        ) : null}
      </div>
    </div>
  );
}
