import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <div className="Header">
    <Navbar bg="danger" variant="light">
      <Container>
        <Navbar.Brand className = "brand" href="home"><h4 className = "header-link">Will Gillette</h4></Navbar.Brand>
        <Nav>
          <Nav.Link className="h-link" href = "home"><h4 className = "header-link">Home</h4></Nav.Link>
          <Nav.Link className="h-link" href = "coursework"><h4 className = "header-link">Course Work</h4></Nav.Link>
          <Nav.Link className="h-link" href = "portfolio"><h4 className = "header-link">Portfolio</h4></Nav.Link>
          <Nav.Link className="h-link" href = "athletics"><h4 className = "header-link">Athletics</h4></Nav.Link>
          <Nav.Link className="h-link" href = "contact"><h4 className = "header-link">Contact Me</h4></Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
