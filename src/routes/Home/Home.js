import React from 'react';
import './Home.css';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import NewsCard from '../../components/NewsCard/NewsCard';
import FrontPage6 from "../../shared/images/FrontPage7.jpg";
import PhiKaps6 from "../../shared/images/PhiKaps6.jpg";


const Home = () => ( // <p>My Myer-Briggs personality type is the <b>ISTJ</b>, meaning that I am rigid when it comes to my core values and beliefs. Additionally, my workstyle revolves around problem-solving in the most efficient way.</p>
  <div className="Home">
    <div id = "overview">
      <h4>Overview</h4>
      <p>I am a 19-year-old sophomore student-athlete pursuing a Bachelor's of Science in Computer Science and Mathematics at <b>Ursinus College</b>.</p>
      <p>At Ursinus, I am a member of the <b>cross-country</b> and <b>track and field</b> teams, where I specialize in long distance running and compete in the 5K/8K/10K distances.</p>
      <p>Furthermore, I am a brother of <b>Phi Kappa Sigma</b>, an international fraternity. In PKS, I am both the <b>academic chair</b> and <b>historian</b>, meaning that I have to promote scholarship within the organization and document photos from social events, respectively.</p>
      <p>Finally, I use my vast knowledge of computer science and mathematics to <b>tutor</b> and <b>coach</b> those who are struggling with those concepts. I take pride in helping others understand the material that I am very passionate about.</p>
      <p>In my leisure time, I enjoy running, programming, playing video games, and watching Arrowverse shows on Netflix. I am currently watching DC's Legends of Tomorrow, Arrow, and new episodes of The Flash.</p>
      <hr/>
    </div>
    <div id = "graphicsContainer">

      <div class = "row">
        <div id = "academicContainer" class = "col-sm-12 col-lg-4">
          <NewsCard header="Academic News" image={FrontPage6} title="Fall 2021 Sem. | 4.0" description="Despite my challenging course load, I managed to secure a 4.0 for the Fall 2021 semester."/>
        </div>
        <div id = "homeCarousel" class = "col-sm-12 col-lg-4">
          <HomeCarousel/>
        </div>
        <div id = "pksContainer" class = "col-sm-12 col-lg-4">
        <NewsCard header="PKS News" image={PhiKaps6} title="Academic Chair Election" description="I was recently elected to be the Pi for the Phi Kappa Sigma Delta Rho chapter."/>
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;