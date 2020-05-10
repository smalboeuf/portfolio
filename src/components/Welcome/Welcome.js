import React from "react";
import "./Welcome.scss";

export default function Welcome(props) {
  return (
    <div className="welcomePage" id="welcome">
      <div className="greeting">
        <img
          alt="InitialsIcon"
          className="initialsIcon"
          src="/images/smIcon.png"
        ></img>
        <div className="greetingContent">
          <h2>Hi, I'm Sheldon. Nice to meet you. </h2>
          <h2>
            I am a Full-Stack Developer utilizing my creativity and passion in
            games and the web.
          </h2>
        </div>
      </div>
      {/* <img className="mainImage" alt="Main" src="/images/Bonsai.jpg"></img> */}
    </div>
  );
}
