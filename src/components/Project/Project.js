import React from "react";
import './Project.scss';


const




export default function Project(props) {

  return (
    <div>
      <img className="projectImage" src={props.project.image}></img>
      <h4 className="projectTitle">{props.project.title}</h4>
      <p className="projectDescription">{props.project.description}</p>
    </div>
  );
}