import React from "react";
import "./About.css";
import peacock from "../assets/Adobe Express - file.png"
import basuri from "../assets/Basuri2.png"
import founder1 from "../assets/founder1.png"
import founder2 from "../assets/founder2.png"

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
        <div className="about-main-header">About</div>
        <img src={basuri} alt="decoration-image" className="basuri"/>

        <div className="about-sub-container">
          <div className="founder-detail">
              <div className="founder-photo"><img src={founder1} alt="" /></div>
              <div className="founder-content">
                <div className="founder-name">Ankur Tyagi</div>
                <div className="founder-designation">CEO & Founder</div>
                <div className="founder-description">With more than 20 years in education in domain in India, I have worked with top academic institutions like FIITJEE, RAO IIT, Co-Founder VISTAAR, and also as a CEO to FTV-SOPA. Be a part of my journey with Udaan360, where ethical education paves the way for success. Together, let's transform dreams into reality.</div>
              </div>
          </div>
          <div className="about-content-container">
            <div className="about-content-cover">
              <p className="about-summary-content">At Udaan360, we believe in education with purpose, empowering individuals with the right knowledge, skills, and opportunities to soar to new heights. Udaan360 is a premier education solutions provider, offering a 360 - degree approach to academic and career success. Rooted in excellence and guided by expertise, we empower students and professionals to achieve their dreams. Guided by the timeless teachings of Lord Krishna, we empower students and professionals to navigate their educational and career aspirations with clarity, confidence, and integrity.</p>
            </div>
          </div>
          <div className="founder-detail">
              <div className="founder-photo"><img src={founder2} alt="" /></div>
              <div className="founder-content">
                <div className="founder-name">Pooja Aggarwal</div>
                <div className="founder-designation">Director</div>
                <div className="founder-description">With 18 years of experience in education sector, my mission has always been to empower students with the right guidance and opportunities. At Udaan360, I am committed to provide ethical counselling, quality education, and global career pathways.</div>
              </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
