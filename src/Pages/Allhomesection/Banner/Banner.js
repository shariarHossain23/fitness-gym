import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner/gym1.jpg';
import banner2 from '../../../images/banner/gym2.jpg';
import banner3 from '../../../images/banner/gym3.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>No pain No gain</h3>
            <p>Starting a fitness journey can be intimidating. There are workouts to learn, diets to follow, willpower to conjure, and self-consciousness to overcome.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shape your body</h3>
            <p> Fitness Quotes To Inspire You Every Time You Work Out · Remember who you're doing it for.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Train to gym</h3>
            <p>
            A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek gymnasium.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
