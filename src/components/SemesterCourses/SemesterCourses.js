import React from 'react';
import './SemesterCourses.css';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

class SemesterCourses extends React.Component {
  render() { // hi
    let Links = [];

    if (this.props.C1) {
      Links.push("/coursework/" + this.props.C1.CourseID)
    }

    if (this.props.C2) {
      Links.push("/coursework/" + this.props.C2.CourseID)
    }

    if (this.props.C3) {
      Links.push("/coursework/" + this.props.C3.CourseID);
    }

    if (this.props.C4) {
      Links.push("/coursework/" + this.props.C4.CourseID)
    }

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
                {Links.length >= 1 &&
                  <tr>
                    <td><Link to = {Links[0]}>{this.props.C1.CourseID}</Link></td>
                    <td>{this.props.C1.CourseName}</td>
                    <td>{this.props.C1.Instructor}</td>
                    <td>{this.props.C1.Grade}</td>
                  </tr>
                }
                {Links.length >= 2 &&
                  <tr>
                  <td><Link to = {Links[1]}>{this.props.C2.CourseID}</Link></td>
                    <td>{this.props.C2.CourseName}</td>
                    <td>{this.props.C2.Instructor}</td>
                    <td>{this.props.C2.Grade}</td>
                  </tr>
                }
                {Links.length >= 3 &&
                  <tr>
                    <td><Link to = {Links[2]}>{this.props.C3.CourseID}</Link></td>
                    <td>{this.props.C3.CourseName}</td>
                    <td>{this.props.C3.Instructor}</td>
                    <td>{this.props.C3.Grade}</td>
                  </tr>
                }
                {Links.length >= 4 &&
                  <tr>
                    <td><Link to = {Links[3]}>{this.props.C4.CourseID}</Link></td>
                    <td>{this.props.C4.CourseName}</td>
                    <td>{this.props.C4.Instructor}</td>
                    <td>{this.props.C4.Grade}</td>
                  </tr>
                }
              </tbody>
            </Table>
          </div>
  }
}

SemesterCourses.propTypes = {};

SemesterCourses.defaultProps = {};

export default SemesterCourses;
