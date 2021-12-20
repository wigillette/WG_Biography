import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <div className="Header">
    <Navbar bg ="light">
      <Container>
        <Navbar.Brand className = "brand" href="#coursework">Will Gillette</Navbar.Brand>
        <Nav >
          <Nav.Link className = "header-link" href = "#home">Home</Nav.Link>
          <Nav.Link className = "header-link" href = "#coursework">Course Work</Nav.Link>
          <Nav.Link className = "header-link" href = "#portfolio">Portfolio</Nav.Link>
          <Nav.Link className = "header-link" href = "#athletics">Athletics</Nav.Link>
          <Nav.Link className = "header-link" href = "#contact">Contact Me</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
