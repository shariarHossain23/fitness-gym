import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo.png';
import CustomLink from "../../Customlink/CustomLink";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img width={60} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className=" ms-auto header"
            >
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/'>Home</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/about'>About</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/service'>Service</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/features'>features</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/login'>login</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
