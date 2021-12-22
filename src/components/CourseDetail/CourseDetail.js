import React from 'react';
import { Breadcrumb, Card } from 'react-bootstrap';
import './CourseDetail.css';

class CourseDetail extends React.Component {
  render(){
    return <div className="CourseDetail">
      <Breadcrumb class = "descBC">
        <Breadcrumb.Item href = "/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href = "/coursework">Course Work</Breadcrumb.Item>
        <Breadcrumb.Item active>{this.props.CourseID}</Breadcrumb.Item>
      </Breadcrumb>
      
      <h4 className = "courseName">{this.props.CourseID} | {this.props.CourseName}</h4>
      <h3 className = "profName">{this.props.Instructor}</h3>
      <p className = "courseDesc">{this.props.DescData}</p>
      
      <div class = "randomQuote">
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className = "blockquote mb-0">
              <p>
                {' '}
                {this.props.Quote.quote}{' '}
              </p>
              <footer className="blockquote-footer">
                {this.props.Quote.author}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  }
}

export default CourseDetail;
