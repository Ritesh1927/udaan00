import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/Carousel.css";
import Banner from "../../assets/banner01.jpg";
import Banner2 from "../../assets/Sirimg.png";
import Banner3 from "../../assets/banner3.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    swipeToSlide: true,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider {...settings}>
        <div className="">
          <div className="image-banner-container">
            <div className="Banner-img-wrapper">
              <img src={Banner} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">
                India's Premier Education Consultants:{" "}
                <span className="company-name">Udaan 360</span>
              </h1>
              <p className="banner-content">
                Recognized as one of the nation's leading education consultancy
                firms, dedicated to student success.
              </p>
              <button className="Explore-btn">
                {" "}
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/8700105214?text=Hello How can i help you"
                >
                  Explore Now
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="image-banner-container">
            <div className="Banner-img-wrapper sir-img-wrap">
              <img src={Banner2} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">25,000+ Students Counseled</h1>
              <p className="banner-content">
                Extensive experience in guiding over 25,000 students towards
                fulfilling their academic and professional goals.​
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/8700105214?text=Hello How can i help you"
                >
                  Explore Now
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="image-banner-container">
            <div className="Banner-img-wrapper sir-img-wrap">
              <img src={Banner3} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">90% Placement in Top Colleges:</h1>
              <p className="banner-content">
                A remarkable 90% of our counseled students have secured
                placements in esteemed colleges, reflecting our commitment to
                excellence.
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/8700105214?text=Hello How can i help you"
                >
                  Explore Now
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="image-banner-container"></div>
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
