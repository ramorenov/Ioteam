import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../App.scss";
import ioteam from "../../img/Ioteam.gif";
import greenhouse from "../../img/greenhouse-min.png";
import hydroponic from "../../img/hydroponic-min.png";
import allaccess from "../../img/allaccess-min.png";

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
        //width={"800px"}
        //dinamicHeight={true}
      >
        <div>
          <img className="imgcar" src={ioteam} alt="iotimg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img className="imgcar" src={greenhouse} alt="greenhouse" />
        </div>
        <div>
          <img className="imgcar" src={hydroponic} alt="hydroponic" />
        </div>
        <div>
          <img className="imgcar" src={allaccess} alt="allaccess" />
        </div>
      </Carousel>
    );
  }
}

export default Carouselimg;
