import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../images/slide1.jpg";
import Slide2 from "../images/slide2.jpg";
import Slide3 from "../images/slide3.jpg";
import "./custom.css";

export const Header = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${Slide1})`,
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div
          className="d-block w-100"
          style={{
            backgroundImage:`url(${Slide2})`,
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${Slide3})`,
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};