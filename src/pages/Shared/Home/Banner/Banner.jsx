import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../../assets/home/01.jpg";
import bannerImg2 from "../../../../assets/home/02.jpg";
import bannerImg3 from "../../../../assets/home/03.png";
import bannerImg4 from "../../../../assets/home/04.jpg";
import bannerImg5 from "../../../../assets/home/05.png";
import bannerImg6 from "../../../../assets/home/06.png";

const Banner = () => {
  return (
    <div className="h-50">
        <Carousel>
      <div>
        <img src={bannerImg1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={bannerImg2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={bannerImg3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={bannerImg4} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src={bannerImg5} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src={bannerImg6} />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
    </div>
  );
};

export default Banner;
