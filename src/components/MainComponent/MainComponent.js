import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainComponent.css';

import CourseDetail from '../CourseDetail/CourseDetail';
import CourseWork from '../../routes/CourseWork/CourseWork';
import Home from '../../routes/Home/Home';
import ContactMe from '../../routes/ContactMe/ContactMe';
import Portfolio from '../../routes/Portfolio/Portfolio';
import Athletics from '../../routes/Athletics/Athletics';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => {
  return {
    CourseData: state.CourseData,
    QuoteList: state.QuoteList.quotes,
    PortfolioData: state.PortfolioData.YearData
  }
}

class Main extends React.Component {

    render(){
        const HomePage = () => {
            return(
                <Home/>
            );
        }
        
        const PortfolioPage = () => {
            console.log(this.props.PortfolioData);
            return(
                <Portfolio data={this.props.PortfolioData}/>
            );
        }

        const ContactMePage = () => {
            return(
                <ContactMe/>
            );
        }


        const AthleticsPage = () => {
            return(
                <Athletics/>
            );
        }

        const CourseWorkPage = () => {
            return(
                <CourseWork
                CourseData = {this.props.CourseData}
                />
            );
        }
    

        const CourseWithId = ({match}) => {
            let randomQuote = this.props.QuoteList[Math.floor(Math.random() * this.props.QuoteList.length)];

            let courseData = null;
            console.log(match.params);
            this.props.CourseData.Semesters.forEach(semesterObject => {
                for (const [entryId, course] of Object.entries(semesterObject)){
                    if (entryId !== "Name" && entryId !== "GPA"){
                        if (match.params.courseId === course.CourseID){
                            courseData = course
                        }
                    }
                }
            });
            
            return(
                <CourseDetail Quote = {randomQuote} DescData = {courseData.Description} CourseID = {courseData.CourseID} CourseName = {courseData.CourseName} Instructor = {courseData.Instructor}/>
            );
        };
    
        return (
            <div className = "PageWrapper">
                <Header />
                <div className = "contentWrap">
                    <Switch>
                        <Route path = "/home" component={HomePage} />
                        <Route exact path = "/coursework" component = {CourseWorkPage}/>
                        <Route path = "/coursework/:courseId" component = {CourseWithId}/>
                        <Route exact path = "/portfolio" component = {PortfolioPage}/>
                        <Route exact path = "/contact" component = {ContactMePage}/>
                        <Route exact path = "/athletics" component = {AthleticsPage}/>
                        <Redirect to = "/home"/>
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
