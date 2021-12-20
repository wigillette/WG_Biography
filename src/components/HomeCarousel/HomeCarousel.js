import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './HomeCarousel.css';
import { Carousel, Card } from 'react-bootstrap';
import Dog1 from "../../shared/images/dog1.jpg";
import Dog2 from "../../shared/images/dog2.jpg";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <Carousel className="HomeCarousel" activeIndex = {index} onSelect = {handleSelect}>
      <Carousel.Item class = "carouselItem">
        <img class = "d-block w-100 img-fluid"
          src={Dog1}
          alt="First Slide"
        ></img>
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Nulla Vitae elit libero, a pharetra augue mollis interdum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class = "carouselItem">
        <img class = "d-block w-100 img-fluid"
          src={Dog2}
          alt="Second Slide"
        ></img>
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Nulla Vitae elit libero, a pharetra augue mollis interdum</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
}


HomeCarousel.propTypes = {};

HomeCarousel.defaultProps = {};

export default HomeCarousel;
