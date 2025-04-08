import React from "react";
import "./About.css";
import peacock from "../assets/Adobe Express - file.png";

const About = () => {
  return (
    <>
      <div className="about-main-container">
        <div className="about-sub-container">
          <div className="about-img-container">
            <img src={peacock} alt="" className="about-peacock-img" />
          </div>
          <div className="about-content-container">
            <p className="about-summary-content">
              At Udaan360, we believe in education with purpose, empowering
              individuals with the right knowledge, skills, and opportunities to
              soar to new heights. Udaan360 is a premier education solutions
              provider, offering a 360 - degree approach to academic and career
              success. Rooted in excellence and guided by expertise, we empower
              students and professionals to achieve their dreams. Guided by the
              timeless teachings of Lord Krishna, we empower students and
              professionals to navigate their educational and career aspirations
              with clarity, confidence, and integrity.
            </p>
          </div>
        </div>
      </div>

      <div className="about-main-container">
        <div className="about-sub-container">
          <div className="about-img-container">
            <img src={peacock} alt="" className="about-peacock-img" />
          </div>
          <div className="about-content-container">
            <p className="about-summary-content">
              At Udaan360, we believe in education with purpose, empowering
              individuals with the right knowledge, skills, and opportunities to
              soar to new heights. Udaan360 is a premier education solutions
              provider, offering a 360 - degree approach to academic and career
              success. Rooted in excellence and guided by expertise, we empower
              students and professionals to achieve their dreams. Guided by the
              timeless teachings of Lord Krishna, we empower students and
              professionals to navigate their educational and career aspirations
              with clarity, confidence, and integrity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
