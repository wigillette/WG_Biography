import React from 'react';
import './CourseDetail.css';

class CourseDetail extends React.Component {
  render(){
    return <div className="CourseDetail">
      <h4 className = "courseName">{this.props.CourseID} | {this.props.CourseName}</h4>
      <h3 className = "profName">{this.props.Instructor}</h3>
      <p className = "courseDesc">{this.props.DescData}</p>
    </div>
  }
}

export default CourseDetail;
