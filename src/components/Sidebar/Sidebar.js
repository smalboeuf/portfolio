import React from "react";
import './Sidebar.scss';

export default function Sidebar(props) {

  return (
    <section className="sidebar">
      <img className="mainPic" src="/images/profilePicSquare.jpg"></img>
      <div className="sidebarDescription">
        <h3>Sheldon Malboeuf</h3>
        <h4>Full-Stack Developer </h4>
        <a href="mailto:smalboeuf01@gmail.com?Subject=Inquiry" target="_top">smalboeuf01@gmail.com</a>
      </div>
      <div className="navbar">
        <a href="#" onClick={props.onWelcome} className="navButtons">Welcome</a>
        <a href="#" onClick={props.onAbout} className="navButtons">About</a>
        <a href="#" className="navButtons">Projects</a>
        <a href="#" onClick={props.onSkills} className="navButtons">Skills</a>
        <a href="#" className="navButtons">Web Development</a>
        <a href="#" className="navButtons">Game Development</a>
      </div>
      <div className="social">
        <a className="socialIcon" target="_blank" href="https://github.com/smalboeuf" class="fa fa-github fa-3x"></a>
        <a className="socialIcon" target="_blank" href="https://www.linkedin.com/in/sheldon-malboeuf-18431a179/" class="fa fa-linkedin fa-3x"></a>
      </div>
    </section>
  );

}