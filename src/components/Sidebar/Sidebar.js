import React from "react";
import './Sidebar.scss';

import { Link, animateScroll as scroll } from "react-scroll";


export default function Sidebar(props) {

  return (
    <section className="sidebar" id="sidebar">
      <img alt="ProfilePicture" className="mainPic" src="/images/profilePicSquare.jpg"></img>
      <div className="sidebarDescription">
        <h3>Sheldon Malboeuf</h3>
        <h4>Full-Stack Developer </h4>
        <a className="email" href="mailto:smalboeuf01@gmail.com?Subject=Inquiry" target="_top">smalboeuf01@gmail.com</a>
      </div>
      <div className="navbar">
        <a href="#" className="navButtons"> <Link activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>Welcome</Link></a>
        <a href="#" className="navButtons"><Link
          to="about"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}>About </Link></a>
        <a href="#" className="navButtons"><Link activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={20}
          duration={500}>Skills</Link></a>
        <a href="#" className="navButtons"><Link activeClass="active"
          to="webProjects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>Web Projects</Link></a>
        <a href="#" className="navButtons"><Link activeClass="active"
          to="gameProjects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>Game Projects</Link></a>
      </div>
      <div className="social">
        <a className="socialIcon" rel="noopener noreferrer" target="_blank" href="https://github.com/smalboeuf" className="fa fa-github fa-3x"> </a>
        <a className="socialIcon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/sheldon-malboeuf-18431a179/" className="fa fa-linkedin fa-3x"> </a>
      </div>
    </section>
  );

}