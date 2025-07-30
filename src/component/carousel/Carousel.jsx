import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/Carousel.css";
import Banner5 from "../../assets/udanbanner06.png";
import Banner2 from "../../assets/Sirimg01.png";
import Banner3 from "../../assets/banner003.png";
import Banner4 from "../../assets/universities100.png";
import Ajinkya from "../../assets/Ajinkya-2.webp"
// import Cbanner1 from "../../assets/c-banner1.png";
import Careercycle from "../carrercycle/Stepcircle";
// import { FaStethoscope, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    button: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    swipeToSlide: true,
  };

  return (
    <div className="udan-carousel">
      <Slider {...settings}>
        <div className="slider-wrapper">
          {/* /////////slide */}
          <div className="image-banner-container">
            <div className="Banner-img-wrapper">
              {/* <img src={Banner} alt="" /> */}
              <Careercycle />
            </div>
            <div className="img-discription-link">
              <div className="slide-text">
                <h1 className="banner-heading">
                  India's Premier Education Consultant:{" "}
                  <span className="company-name">Udaan360</span>
                </h1>
              </div>

              <p className="banner-content">
                Recognized as one of the India's leading education consultancy
                firm, dedicated to students comfort & success and institutes
                growth & development .
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
        <div className="slider-wrapper">
          {/* /////////1st slide ////////// */}
          <div className="image-banner-container">
            {/* sir-img-wrap */}
            <div className="Banner-img-wrapper ">
              <img src={Banner2} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading">
                25,000+ Students counselled <br />
                <span className="company-name">Ankur Tyagi</span>
              </h1>

              <p className="banner-content">
                20 years of extensive experience in guiding over 25,000 students
                towards fulfilling their academic and professional goals.
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
        <div className="slider-wrapper">
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
        <div className="slider-wrapper">
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
        <div className="slider-wrapper">
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
        <div className="slider-wrapper">
          <div className="image-banner-container">
            <div className="Banner-img-wrapper last-img-slider sir-img-wrap">
              <img src={Ajinkya} alt="" />
            </div>
            <div className="img-discription-link">
              <h1 className="banner-heading ">
                Industry Driven Program
                <br />
                <span className="Ajinky-banner-heading">
                  in technology
                </span>
              </h1>
              <div className="banner-content-ajinky-content">
                <div className="Intellipat-container">
                  <h2 className="mb10">
                    Intellipaat
                  </h2>
                  <b className="mb5"> Colleges </b> 
                  <p  className="mb5"> DY Patil University (Pune) <br />  S-VYASA University (Bengaluru)</p>
                  <p>
                   Master Data Science, Machine Learning, Python, SQL, Power BI & Generative AI with this career-focused course by Intellipaat, in collaboration with iHUB, IIT Roorkee and Microsoft. Get hands-on training with real-time projects and earn a certificate from top institutions.
                  </p>
                </div>
                {/* ///////////////////////////// */}
                <div className="Intellipat-container sunstone-container">
                  <h2 className="mb10">
                    Sunstone
                  </h2>
                  <b  className="mb5">Colleges </b> 
                  <p  className="mb5">Ajeenkya DY Patil University, Pune (Pune) <br />  Rayat Bahra University, (Mohali) </p>
                  <p>Sunstone partners with 35+ colleges to offer MBA, BBA, BCA & more with 100% placement support, industry certifications, soft skills training, real-world projects, career mentorship, and access to top recruiters like Google, Amazon & Flipkart.</p>
                </div>

              </div>
              <button className="Explore-btn">
                <a
                  className="Explore-btn-a"
                  target="blank"
                  href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
                >
                  Admission Now
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
