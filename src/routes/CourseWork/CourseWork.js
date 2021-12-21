import React from 'react';
import SemesterCourses from '../../components/SemesterCourses/SemesterCourses';

import './CourseWork.css';

/*
Get Course Data
Fetches the course data and uses the SemesterCourses to create tables for the data in the file
*/
function getCourseData(CourseData){
  var tableList = [];
  var key = 0;
  CourseData.Semesters.forEach(courseObject => { 
    tableList.push(<SemesterCourses key = {key} Name={courseObject.Name} GPA={courseObject.GPA} 
      C1 = {{CourseID: courseObject.C1.CourseID, Instructor: courseObject.C1.Instructor, Grade: courseObject.C1.Grade, CourseName: courseObject.C1.CourseName}}
      C2 = {{CourseID: courseObject.C2.CourseID, Instructor: courseObject.C2.Instructor, Grade: courseObject.C2.Grade, CourseName: courseObject.C2.CourseName}}
      C3 = {{CourseID: courseObject.C3.CourseID, Instructor: courseObject.C3.Instructor, Grade: courseObject.C3.Grade, CourseName: courseObject.C3.CourseName}}
      C4 = {{CourseID: courseObject.C4.CourseID, Instructor: courseObject.C4.Instructor, Grade: courseObject.C4.Grade, CourseName: courseObject.C4.CourseName}}
      />);
      key += 1;
  });

  return tableList;
}


class CourseWork extends React.Component {
  
  render(){
    return <div className="CourseWork">
      <div className = "InfoSection">
        <h4>Academic Overview</h4>
        <p>I am pursuing a double major in <b>computer science</b> and <b>mathematics</b> and may potentially add a <b>statistics</b> minor. I plan to use my knowledge from math and computer science courses to specialize in <b>Machine Learning</b>.</p>
        <p>My cumulative GPA is a <b>3.97</b>, while my computer science and mathematics GPAs are <b>4.0</b> and <b>3.91</b>, respectively.</p>
      </div>
      <div className = "CourseTables">
        {getCourseData(this.props.CourseData)}
      </div>
    </div>
  }

}

CourseWork.propTypes = {};

CourseWork.defaultProps = {};

export default CourseWork;
