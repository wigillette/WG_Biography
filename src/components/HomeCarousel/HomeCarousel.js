import React, {useState} from 'react';
import './HomeCarousel.css';
import { Carousel } from 'react-bootstrap';
import PhiKaps5 from "../../shared/images/PhiKaps5.jpg";
import FrontPage5 from "../../shared/images/FrontPage5.jpg";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <Carousel className="HomeCarousel" activeIndex = {index} onSelect = {handleSelect}>
      <Carousel.Item className = "carouselItem">
        <img className = "d-block w-100 img-fluid"
          src={FrontPage5}
          alt="First Slide"
        ></img>
        <Carousel.Caption>
          <h3>Ursinus College Family Day</h3>
          <p>A photoshoot of me in my legenday HOKA Summer Mile Club hat.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className = "carouselItem">
        <img className = "d-block w-100 img-fluid"
          src={PhiKaps5}
          alt="Second Slide"
        ></img>
        <Carousel.Caption>
          <h3>Suicide Prevention Walk</h3>
          <p>The Phi Kaps volunteer annually at a Suicide Prevention Walk.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
}

export default HomeCarousel;
