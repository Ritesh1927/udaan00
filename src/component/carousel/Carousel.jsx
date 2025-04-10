import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/Carousel.css";
import Banner from "../../assets/Banner.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    swipeToSlide: true,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider {...settings}>
        <div>
          <div className="image-banner-container"></div>
        </div>
        <div>
          <div className="image-banner-container"></div>
          {/* <img src={Banner} alt="Slide 2" className="w-full rounded-xl" /> */}
        </div>
        <div>
          <div className="image-banner-container"></div>
          {/* <img src={Banner} alt="Slide 3" className="w-full rounded-xl" /> */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
