import React from "react";
import "./About.css";
import peacock from "../assets/Adobe Express - file.png";
import basuri from "../assets/Basuri2.png";
import founder1 from "../assets/founder1.png";
import founder12 from "../assets/founder12.png";
import founder22 from "../assets/founder22.png";
import founder2 from "../assets/founder2.png";
import study1 from "../assets/study.png";
import study2 from "../assets/study2.png";
import study3 from "../assets/study3.png";
import study4 from "../assets/study4.png";
import Abtbanner from "../assets/Aboutbanner.png";

const About = () => {
  return (
    <>
      <div className="about-banner-container">
        <img src={Abtbanner} alt="" />
      </div>
      <div className="container about-main-container">
        <h1 className="about-header">About us </h1>
        <div></div>
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
            <div className="about-sub-main-part2 card1">
              {/* <div className="founder-image">
              <img src={founder12} alt="" />
            </div> */}

              <h3 className="founder-name mb3">Ankur Tyagi</h3>
              <p className="founder-designation">CEO & Founder</p>
              <p className="founder-details-content">
                With more than 20 years in education in domain in India, I have
                worked with top academic institutions like FIITJEE, RAO IIT,
                Co-Founder VISTAAR, and also as a CEO to FTV-SOPA. Be a part of
                my journey with Udaan360, where ethical education paves the way
                for success. Together, let's transform dreams into reality.
              </p>
            </div>

            <div className="about-sub-main-part2 card2 ">
              <h3 className="founder-name mb3">Pooja Aggarwal</h3>
              <p className="founder-designation">Director</p>
              <p className="founder-details-content">
                With 18 years of experience in education sector, my mission has
                always been to empower students with the right guidance and
                opportunities. At Udaan360, I am committed to provide ethical
                counselling, quality education, and global career pathways.
              </p>

              {/* <div className="founder-image">
              <img src={founder22} alt="" />
            </div> */}
            </div>
            <div className="about-sub-main-part2 card3 ">
              <h3 className="founder-name mb3">Kunal</h3>
              <p className="founder-designation">Director</p>
              <p className="founder-details-content">
                With 18 years of experience in education sector, my mission has
                always been to empower students with the right guidance and
                opportunities. At Udaan360, I am committed to provide ethical
                counselling, quality education, and global career pathways.
              </p>

              {/* <div className="founder-image">
              <img src={founder22} alt="" />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
