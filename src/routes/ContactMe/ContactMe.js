import React, {useState} from 'react';
import './ContactMe.css';
import { Form, Row, Button, Col, Carousel } from 'react-bootstrap';
import FrontPage3 from "../../shared/images/PhiKaps2.jpg";
import FrontPage4 from "../../shared/images/PhiKaps1.jpg";

const ContactMeCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <Carousel className="ContactMeCarousel" activeIndex = {index} onSelect = {handleSelect}>
      <Carousel.Item className = "carouselItem">
        <img className = "d-block w-100 img-fluid"
          src={FrontPage3}
          alt="First Slide"
        ></img>
        <Carousel.Caption>
          <h3>Phi Kappa Sigma Delta Rho Upsilon Line Initiation</h3>
          <p>A photo of the PKS new member line on initiation night</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className = "carouselItem">
        <img className = "d-block w-100 img-fluid"
          src={FrontPage4}
          alt="Second Slide"
        ></img>
        <Carousel.Caption>
          <h3>Phi Kappa Sigma Delta Rho Upsilon Line Group Photo</h3>
          <p>A photo of the PKS new member line after fulfilling all the initiation requirements</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
}

function ContactMe(){
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return <div className="ContactMe">
    <div className="ContactHeader">
      <h4>Contact Me</h4>
      <p>On this page, you can enter your contact information and send a message if you would like to contact me.</p>
      <p>Please note that I will take at most one week to respond to all messages.</p>
      <hr/>
    </div>
    <div className="ContactForm">
      <Form noValidate validated={validated} onSubmit = {handleSubmit} >
        <Row className = "mb-3">
          <Form.Group as = {Col} controlId = "formGridFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your first name"/>
            <Form.Control.Feedback type="invalid">
              Invalid First Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as = {Col} controlId = "formGridLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your last name"/>
            <Form.Control.Feedback type="invalid">
              Invalid Last Name
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className = "mb-3">
          <Form.Group as = {Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter your email"/>
            <Form.Control.Feedback type="invalid">
              Invalid Email
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className = "mb-3">
          <Form.Group as = {Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control required validEmail as="textarea" placeholder="Enter your message"/>
            <Form.Control.Feedback type="invalid">
              Invalid Message
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit Form</Button>
      </Form>
    </div>
    <ContactMeCarousel/>
  </div>
}

ContactMe.propTypes = {};

ContactMe.defaultProps = {};

export default ContactMe;