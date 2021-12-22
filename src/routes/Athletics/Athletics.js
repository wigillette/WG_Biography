import React from 'react';
import './Athletics.css';
import { Card, Col, Row } from 'react-bootstrap';
import Running1 from "../../shared/images/Running1.jpg";
import Running2 from "../../shared/images/Running2.jpg";
import Running3 from "../../shared/images/Running3.jpg";

class AthleticsCard extends React.Component{
  render(){
    return <Card className = "athleticsCard">
      <Card.Img variant="top" src={this.props.image}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
      </Card.Body>
    </Card>
  }
}


const Athletics = () => (
  <div className="Athletics">
    <div className="AthleticsHeader">
      <h4>Athletics</h4>
      <p>I have competed on the cross-country/track teams for eight years now, but I started running for leisure at age eight. My running career has essentially been a roller coaster, from running incredible races to being placed on the sidelines multiple times due to injuries.</p>
      <p>On this page, I will dive into my experiences competing as a student-athlete and the physical and mental benefits I received from doing so.</p>
      <hr/>

      <Row>
        <Col>
          <AthleticsCard image = {Running1} title="Johns Hopkins Kickoff Invitational" description="The first pain-free race that I competed in during sophomore year."/>
        </Col>
        <Col>
          <AthleticsCard image = {Running2} title="Three Bridges Fire Company Five Mile Run" description="I competed in this race during the summer of 2021."/>
        </Col>
        <Col>
          <AthleticsCard image = {Running3} title="Three Bridges Fire Company Five Mile Run Awards" description="I competed in this race during the summer of 2021."/>
        </Col>
      </Row>
    </div>
  </div>
);

Athletics.propTypes = {};

Athletics.defaultProps = {};

export default Athletics;
