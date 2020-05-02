import React from "react";
import './Sidebar.scss';

export default function Sidebar(props) {

  return (
    <section className="sidebar">
      <img alt="ProfilePicture" className="mainPic" src="/images/profilePicSquare.jpg"></img>
      <div className="sidebarDescription">
        <h3>Sheldon Malboeuf</h3>
        <h4>Full-Stack Developer </h4>
        <a className="email" href="mailto:smalboeuf01@gmail.com?Subject=Inquiry" target="_top">smalboeuf01@gmail.com</a>
      </div>
      <div className="navbar">
        <a href="#" onClick={props.onWelcome} className="navButtons">Welcome</a>
        <a href="#" onClick={props.onAbout} className="navButtons">About</a>
        <a href="#" onClick={props.onSkills} className="navButtons">Skills</a>
        <a href="#" onClick={props.onWebProjects} className="navButtons">Web Projects</a>
        <a href="#" onClick={props.onGameProjects} className="navButtons">Game Projects</a>
      </div>
      <div className="social">
        <a className="socialIcon" rel="noopener noreferrer" target="_blank" href="https://github.com/smalboeuf" className="fa fa-github fa-3x"> </a>
        <a className="socialIcon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/sheldon-malboeuf-18431a179/" className="fa fa-linkedin fa-3x"> </a>
      </div>
    </section>
  );

}