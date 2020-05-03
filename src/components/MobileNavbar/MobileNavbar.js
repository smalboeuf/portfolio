import React from "react";
import "./MobileNavbar.scss";
import { Navbar, Nav } from "react-bootstrap";

import { Link, animateScroll as scroll } from "react-scroll";

export default function MobileNavbar(props) {


  return (
    <div className="mobileNav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sheldon Malboeuf</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"><Link activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>Welcome</Link></Nav.Link>
          <Nav.Link href="#features"><Link
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}>About</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>Skills</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link activeClass="active"
            to="webProjects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}>Web</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link activeClass="active"
            to="gameProjects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>Games</Link></Nav.Link>
          <Nav.Link href="#pricing"><a className="socialIcon" rel="noopener noreferrer" target="_blank" href="https://github.com/smalboeuf" className="fa fa-github fa-2x"> </a></Nav.Link>

          <Nav.Link href="#pricing"><a className="socialIcon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/sheldon-malboeuf-18431a179/" className="fa fa-linkedin fa-2x"> </a></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}