import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="ml-auto my-2 my-lg-0 main_menu" navbarScroll>
              <Nav.Link className="active" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Products & Services
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Become a Client
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} className="" to="">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
