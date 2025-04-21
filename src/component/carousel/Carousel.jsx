import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/Carousel.css";
import Banner5 from "../../assets/udanbanner06.png";
import Banner2 from "../../assets/Sirimg01.png";
import Banner3 from "../../assets/banner003.png";
import Banner4 from "../../assets/universities100.png";
import Careercycle from "../carrercycle/Stepcircle";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    swipeToSlide: true,
  };

  return (
    <div className="udan-carousel">
      <Slider {...settings}>
        <div className="">
          <div className="image-banner-container">
            <div className="Banner-img-wrapper">
              {/* <img src={Banner} alt="" /> */}
              <Careercycle />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">
                India's Premier Education Consultants:{" "}
                <span className="company-name">Udaan360</span>
              </h1>
              <p className="banner-content">
                Recognized as one of the nation's leading education consultancy
                firms, dedicated to student success.
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more
"
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
              <img src={Banner2} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">
                25,000+ Students counselled <br />
                <span className="company-name">Ankur Tyagi</span>
              </h1>

              <p className="banner-content">
                20 years of extensive experience in guiding over 25,000 students
                towards fulfilling their academic and professional goals.​
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more
"
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
              <h1 className="banner-heading">90% Admissons in Top Colleges:</h1>
              <p className="banner-content">
                A remarkable 90% of our counseled students have secured
                placements in esteemed colleges, reflecting our commitment to
                excellence.
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more
"
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
              <img src={Banner4} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">
                Embark on a Global Academic Journey with
                <span className="company-name"> Udaan360</span>
              </h1>

              {/* <h1 className="banner-heading"> Your Study Abroad Partner </h1> */}
              <p className="banner-content">
                At Udaan360, we are dedicated to transforming your aspirations
                of studying abroad into reality. Tailor counseling to align your
                academic goals with the right international programs
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more
"
                >
                  Explore Now
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="image-banner-container">
            <div className="Banner-img-wrapper last-img-slider sir-img-wrap">
              <img src={Banner5} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">
                Your Gateway to Global Careers in Healthcare & IT
              </h1>
              <p className="banner-content">
                Udaan360 is a comprehensive platform designed to support skilled
                professionals in the healthcare and IT sectors seeking
                international career opportunities.
              </p>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
                >
                  Explore Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
