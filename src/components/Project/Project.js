import React from "react";
import "./Project.scss";

export default function Project(props) {
  const imageClass = props.constructed
    ? "projectImage"
    : "projectImage underConstruction";

  const underConstruction = props.constructed ? null : (
    <p className="constructionHeader">Under Construction</p>
  );

  return (
    <div className="project">
      <h4 className="projectTitle">{props.project.title}</h4>
      <div className="imageContainer">
        <img
          alt="Project"
          className={imageClass}
          src={props.project.image}
        ></img>
        <div className="constructionPosition">{underConstruction}</div>
      </div>
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
