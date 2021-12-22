import React, {useState} from 'react';
import { Nav, Navbar, Container, Offcanvas, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

class Quote extends React.Component {
  render(){
    return <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}{this.props.quote}{' '}
          </p>
          <footer className="blockquote-footer">
            {this.props.author}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  }
}

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button id = "MobileMenuToggle" onClick={handleShow}>
        <i className = "fa fa-bars"></i>
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>William Gillette</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>Navigation</h4>
          <ul className="list-unstyled navigation-links">
            <li><Link to = "/home">Home</Link></li>
            <li><Link to = "/coursework">Course Work</Link></li>
            <li><Link to = "/portfolio">Portfolio</Link></li>
            <li><Link to = "/athletics">Athletics</Link></li>
            <li><Link to = "/contact">Contact Me</Link></li>             
          </ul>
          <hr/>
          <Quote quote="Geniuses do not exist in the world." author = "Chris Tralie, Ph.D."></Quote>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Header = () => (
  <div className = "Wrapper">
    <div className="Header">
      <Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand className = "brand" href="/home"><h4 className = "header-link">William Gillette</h4></Navbar.Brand>
          <Nav>
            <Nav.Link className="h-link" href = "/home"><h4 className = "header-link">Home</h4></Nav.Link>
            <Nav.Link className="h-link" href = "/coursework"><h4 className = "header-link">Course Work</h4></Nav.Link>
            <Nav.Link className="h-link" href = "/portfolio"><h4 className = "header-link">Portfolio</h4></Nav.Link>
            <Nav.Link className="h-link" href = "/athletics"><h4 className = "header-link">Athletics</h4></Nav.Link>
            <Nav.Link className="h-link" href = "/contact"><h4 className = "header-link">Contact Me</h4></Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
    </div>
    <SideBar/>
    
  </div>
  
);

export default Header;