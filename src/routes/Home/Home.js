import React from 'react';
import './Home.css';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';


const Home = () => (
  <div className="Home">
    <HomeCarousel/>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;