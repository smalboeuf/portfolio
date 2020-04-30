import React from "react";
import './Project.scss';







export default function Project(props) {

  return (
    <div className="project">
      <img className="projectImage" src={props.project.image}></img>
      <div className="projectInfo">
        <h4 className="projectTitle">{props.project.title}</h4>
        <p className="projectDescription">{props.project.description}</p>
        <p>Stack: {props.project.stack}</p>
        <a href={props.project.github}>Github</a>
      </div>
    </div>
  );
}