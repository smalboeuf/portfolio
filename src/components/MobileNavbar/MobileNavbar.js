import React from "react";
import "./MobileNavbar.scss";
import { Navbar, Nav } from "react-bootstrap";

export default function MobileNavbar(props) {


  return (
    <div className="mobileNav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sheldon Malboeuf</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Welcome</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Skills</Nav.Link>
          <Nav.Link href="#pricing">Web Projects</Nav.Link>
          <Nav.Link href="#pricing">Game Projects</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}