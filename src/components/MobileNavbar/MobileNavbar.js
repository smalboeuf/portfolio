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
            offset={-250}
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
            duration={500}>Web Projects</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link activeClass="active"
            to="gameProjects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>Game Projects</Link></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}