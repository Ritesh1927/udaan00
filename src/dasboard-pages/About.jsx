import React from "react";
import "./About.css";
// import study2 from "../assets/study2.png";
import study2 from "../assets/handholding.png";
import Abtbanner from "../assets/Aboutbanner2.jpg";
import Sir from "../assets/Sirimg01.png";
import Mam from "../assets/mamimg.png";
import Kunalsir from "../assets/kunalsir.png";

const About = () => {
  return (
    <>
      <div className="about-banner-container">
        <img src={Abtbanner} alt="" />
      </div>
      <div className="container about-main-container">
        <h1 className="about-header">About us </h1>
      </div>
      <div className=" container about-main-container">
        <div className="about-sub-main">
          <div className="about-sub-main-part1">
            <div className="about-sub-main-image">
              <img src={study2} alt="" />
            </div>
            <div className="about-sub-main-content">
              <p>
                At Udaan360, we believe in education with purpose, empowering
                individuals with the right knowledge, skills, and opportunities
                to soar to new heights. Udaan360 is a premier education
                solutions provider, offering a 360 - degree approach to academic
                and career success.
              </p>
              <p>
                Rooted in excellence and guided by expertise, we empower
                students and professionals to achieve their dreams. Guided by
                the timeless teachings of Lord Krishna, we empower students and
                professionals to navigate their educational and career
                aspirations with clarity, confidence, and integrity.
              </p>
            </div>
          </div>

          <hr className="horizontal-line" />

          <div className="founder-header">Our Team </div>
          <div className="our-team-container ">
            <div className="card">
              <div className="card-img-wrapper">
                <img src={Sir} className="card__image" alt="" />
              </div>

              <div className="card__overlay">
                <div className="card__header">
                  <div className="step-count-wrap">
                    <p className="step-count inline-center align-center">1</p>
                  </div>

                  <div className="card__header-text">
                    <h3 className="card__title">Ankur Tyagi</h3>
                    <h5>CEO & Founder</h5>
                  </div>
                </div>
                <p className="card__description">
                  With more than 20 years in education in domain in India, I
                  have worked with top academic institutions like FIITJEE, RAO
                  IIT, Co-Founder VISTAAR, and also as a CEO to FTV-SOPA. Be a
                  part of my journey with Udaan360, where ethical education
                  paves the way for success. Together, let's transform dreams
                  into reality.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-wrapper">
                <img src={Mam} className="card__image" alt="" />
              </div>
              <div className="card__overlay">
                <div className="card__header">
                  <div className="step-count-wrap">
                    <p className="step-count inline-center align-center">2</p>
                  </div>

                  <div className="card__header-text">
                    <h3 className="card__title">Pooja Aggarwal</h3>
                    <h5>COO & Co-founder</h5>
                  </div>
                </div>
                <p className="card__description">
                  With 18 years of experience in education sector, my mission
                  has always been to empower students with the right guidance
                  and opportunities. At Udaan360, I am committed to provide
                  ethical counselling, quality education, and global career
                  pathways.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-wrapper">
                <img src={Kunalsir} className="card__image" alt="" />
              </div>
              <div className="card__overlay">
                <div className="card__header">
                  <div className="step-count-wrap">
                    <p className="step-count inline-center align-center">3</p>
                  </div>

                  <div className="card__header-text">
                    <h3 className="card__title">Kunal Handu</h3>
                    <h5>Director</h5>
                  </div>
                </div>
                <p className="card__description">
                  With 18 years of experience in education sector, my mission
                  has always been to empower students with the right guidance
                  and opportunities. At Udaan360, I am committed to provide
                  ethical counselling, quality education, and global career
                  pathways.
                </p>
              </div>
            </div>

            {/* <div className="about-sub-main-part2 card3 ">
              <h3 className="founder-name mb3"></h3>
              <p className="founder-designation"> </p>
              <p className="founder-details-content">
                With 18 years of experience in education sector, my mission has
                always been to empower students with the right guidance and
                opportunities. At Udaan360, I am committed to provide ethical
                counselling, quality education, and global career pathways.
              </p>

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
