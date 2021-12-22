import React from 'react';
import './Footer.css';
import {Container} from "react-bootstrap";

const Footer = () => (
  <div className="main-footer">
    <Container>
      <div className = "row">
        <div className = "col-lg-4 col-sm-6">
          <h4>Social Media</h4>
          <ul className = "list-unstyled social-media">
            <li><a href = "https://www.facebook.com/william.gillette.3152"><i className="fa fa-facebook-square" aria-hidden = "true"></i></a></li>
            <li><a href = "https://www.instagram.com/wcgillette"><i className="fa fa-instagram" aria-hidden = "true"></i></a></li>
            <li><a href = "https://www.linkedin.com/in/william-g-95abb5202"><i className="fa fa-linkedin-square" aria-hidden = "true"></i></a></li>
            <li><a href = "https://twitter.com/SoIationsRBLX"><i className="fa fa-twitter-square" aria-hidden = "true"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-6">
          <h4>Contact Information</h4>
          <ul className="list-unstyled contact-info">
            <li><b>Cell Phone:</b> 908-300-0673</li>
            <li><b>Email:</b> wgillette02@gmail.com</li> 
          </ul>
        </div>
        <div id = "footerNavigation" className="col-lg-4">
          <h4>Navigation</h4>
          <ul className="list-unstyled navigation-links">
            <li><a href = "home">Home</a></li>
            <li><a href = "coursework">Course Work</a></li>
            <li><a href = "portfolio">Portfolio</a></li>
            <li><a href = "resume">Resume</a></li>
            <li><a href = "contactme">Contact Me</a></li>             
          </ul>
        </div>
      </div>
      
      <div id ="footerCredits" className = "row">
        <hr/>
        <p className = "col-sm">
          &copy;{new Date().getFullYear()} William Gillette Biography | All rights reserved
        </p>
      </div>
    </Container>
  </div>
);

export default Footer;
