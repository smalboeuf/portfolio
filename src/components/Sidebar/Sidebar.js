import React from "react";
import './Sidebar.scss';

export default function Sidebar(props) {

  return (
    <section className="sidebar">
      <img className="mainPic" src="/images/profilePicSquare.jpg"></img>
      <div className="sidebarDescription">
        <h3>Sheldon Malboeuf</h3>
        <p><a href="mailto:smalboeuf01@gmail.com?Subject=Inquiry" target="_top">smalboeuf01@gmail.com</a></p>
      </div>
      <div className="navbar">
        <a className="navButtons">About</a>
        <a className="navButtons">Projects</a>
        <a className="navButtons">Skills</a>
        <a className="navButtons">Resume</a>
      </div>
      <div className="social">github, linkedIn, </div>
    </section>
  );

}