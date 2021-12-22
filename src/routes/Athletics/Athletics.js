import React from 'react';
import './Athletics.css';
import { Card, Col, Row, Accordion } from 'react-bootstrap';
import Running1 from "../../shared/images/Running1.jpg";
import Running7 from "../../shared/images/Running7.jpg";
import Running3 from "../../shared/images/Running3.jpg";
import Running4 from "../../shared/images/Running4.jpg";
import Running5 from "../../shared/images/Running5.jpg";
import Running6 from "../../shared/images/Running6.jpg";

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
    </div>
    <div id = "highSchoolInfo" className = "AthleticsBody">
      <h3>High School</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Freshman Year</Accordion.Header>
          <Accordion.Body>
            My freshman year of high school was filled with new opportunities and many changes. My body, however, did not adapt to these changes as quickly as my mind did. As a result, I got bogged down by an unprecedented injury, a fibular stress fracture, due to improper footwear and a rapid increase in mileage. In spite of this, however, I still competed twice during the cross-country season. It took months for me to fully recover from this stress fracture and regain my full aerobic fitness. When Spring track season came around, I was in a good spot physically to break some records. My 1600m personal best from freshman year was a 5:15, and my 3200m personal best was an 11:52.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sophomore Year</Accordion.Header>
          <Accordion.Body>
            My freshman year stress fracture motivated me to train well for my sophomore year cross-country season. I retained my momentum from my freshman year track season and crushed my 5K PR, crossing the finish line at 18:09. This trend was similar with my sophomore year track seasons, where my 1600m times were 5:04 and 5:00 in the indoor and outdoor seasons, respectively.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Junior Year</Accordion.Header>
          <Accordion.Body>
            Junior year was the golden age of my high school running career. I finally achieved the varsity standards for my school, clocking in at 17:47 for my 5K. Furthermore, I finally broke five minutes in the 1600m, finishing in 4:50. To top things off, I discovered my talent in the 3200m, running a 10:28 outdoors with not much experience racing that distance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Senior Year</Accordion.Header>
          <Accordion.Body>
            I expected to continue breaking my personal records during my senior seasons, but due to COVID and injuries, I was unable to do so. I faced my second fibular stress fracture during the cross-country season, with my full recovery taking four months. When I was finally beginning to regain my fitness, the pandemic began and everyone had to quarantine. This was the conclusion to my high school running career.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>      
    </div>
    <hr/>
    <div id = "collegeInfo" className = "AthleticsBody">
      <h3>College</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Freshman Year</Accordion.Header>
          <Accordion.Body>
            My freshman year of college was also a huge transition, especially due to the many restrictions as a result of the pandemic. Ironically, I ran significantly faster during our intracollegiate cross-country season compared to my high school seasons, primarily due to all the base fitness I acquired during the pandemic. Following my second stress fracture, I increased my volume very gradually, resulting in a successful first collegiate season. While intercollegiate competition was prohibited, I competed in various time trials, running a 10:28 in the two mile, 16:50 in the 5K, and 27:36 in the 8K. Due to several months of consecutive training, however, I ended up injuring myself. While I never received an official diagnosis for this injury, the athletic trainer believed it was a stress reaction due to excessive training. I recovered from this injury within weeks, and I spent my first collegiate outdoor track season rebuilding my base fitness. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sophomore Year</Accordion.Header>
          <Accordion.Body>
            During my sophomore year, I was really eager to run fast and work really hard of the summer. I was unsuccessful, however, because I was plagued by various injuries over the summer: shin splints, plantar fasciitis, and anterior ankle impingement. Consequently, I entered my sophomore cross-country season with less base fitness than others. Due to my frustrations over the summer, I opted to amp up my mileage rather quickly, resulting in a third stress fracture shortly after the first meet. Although, this most recent stress fracture was much different than the other two because it was in my proximal femur. Furthermore, I was completely unaware that this injury was a stress fracture until my MRI in late October, six weeks after I initially started to feel pain. I ended up being sidelined for two months, finally receiving permission to run again in mid-December. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>      
    </div>
    <hr/>
    <Row className = "AthleticsImages">
      <Col id = "Hopkins">
        <AthleticsCard image = {Running1} title="Johns Hopkins Kickoff Invitational" description="This 6K was my first race during sophomore year, and my last pain-free race before fracturing my femur."/>
      </Col>
      <Col id = "JuniorYr">
        <AthleticsCard image = {Running4} title="2018 JV XC Championships" description="I achieved my high school 5K PR at this race in Thompson Park."/>
      </Col>
      <Col id = "Regionals">
        <AthleticsCard image = {Running5} title="2018 Nike Cross Regionals" description="The high school regionals race was on the hardest 5K course that I ran in high school, but I conquered it. "/>
      </Col>
      <Col id = "Track">
        <AthleticsCard image = {Running6} title="4x800m Relay" description="During my junior year outdoor track season, I spent the first half of the season competing in the 800m relays, allowing myself to build up the speed I needed to run faster in the 1600m."/>
      </Col>
      <Col id = "College">
        <AthleticsCard image = {Running7} title="Collegiate Sophomore Year Media Day" description="This is my sophomore media day picture, featuring my HOKA Rocket X running shoes."/>
      </Col>
      <Col id = "ThreeBridges">
        <AthleticsCard image = {Running3} title="Three Bridges Fire Company Five Mile Run Awards" description="I competed in this five mile race during the summer of 2021, finishing in thirty minutes."/>
      </Col>
    </Row>
  </div>
);

Athletics.propTypes = {};

Athletics.defaultProps = {};

export default Athletics;
