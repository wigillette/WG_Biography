import React from 'react';
import './SemesterCourses.css';
import Table from 'react-bootstrap/Table';

class SemesterCourses extends React.Component {
  render() { // hi
    return <div className="SemesterCourses">
            <Table responsive striped bordered hover className = "SemesterTable"> 
              <caption>{this.props.Name} | GPA: {this.props.GPA}</caption>
              <tbody>
                <tr>
                  <th>Course ID:</th>
                  <th>Course Name:</th>
                  <th>Professor:</th>
                  <th>Grade:</th>
                </tr>
                <tr>
                  <td>{this.props.C1.CourseID}</td>
                  <td>{this.props.C1.CourseName}</td>
                  <td>{this.props.C1.Instructor}</td>
                  <td>{this.props.C1.Grade}</td>
                </tr>
                <tr>
                  <td>{this.props.C2.CourseID}</td>
                  <td>{this.props.C2.CourseName}</td>
                  <td>{this.props.C2.Instructor}</td>
                  <td>{this.props.C2.Grade}</td>
                </tr>
                <tr>
                  <td>{this.props.C3.CourseID}</td>
                  <td>{this.props.C3.CourseName}</td>
                  <td>{this.props.C3.Instructor}</td>
                  <td>{this.props.C3.Grade}</td>
                </tr>
                <tr>
                  <td>{this.props.C4.CourseID}</td>
                  <td>{this.props.C4.CourseName}</td>
                  <td>{this.props.C4.Instructor}</td>
                  <td>{this.props.C4.Grade}</td>
                </tr>
              </tbody>
            </Table>
          </div>
  }
}

SemesterCourses.propTypes = {};

SemesterCourses.defaultProps = {};

export default SemesterCourses;
