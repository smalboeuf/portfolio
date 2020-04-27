import React from "react";
import "./Welcome.scss";


export default function Welcome(props) {

  return (
    <div>
      <img className="initialsIcon" src="/images/smIcon.png"></img>
      <h2>Hi, I'm Sheldon. Nice to meet you. </h2>
      {/* Require a nice background photo */}
    </div>
  );
}