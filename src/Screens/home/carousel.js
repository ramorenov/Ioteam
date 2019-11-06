import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Carouselimg extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        transitionTime={350}
        interval={5000}
        width={"800px"}
        dinamicHeight={true}
      >
        <div>
          <img
            src="https://live.staticflickr.com/1877/44216935831_b0ce92bed6.jpg"
            alt="iotimg"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/1744/28690279138_d43987e40d.jpg"
            alt="agricultureiotimg"
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/711/32544018313_1f89ed7f05.jpg"
            alt="fireimg"
          />
        </div>
        <div>
          <img
            src=" https://live.staticflickr.com/4828/46671186092_01474629de.jpg"
            alt="iotblueimg"
          />
        </div>
      </Carousel>
    );
  }
}

export default Carouselimg;
