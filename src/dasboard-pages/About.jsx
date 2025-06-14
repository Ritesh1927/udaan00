import React from "react";
import "./About.css";
// import study2 from "../assets/study2.png";
import study2 from "../assets/handholding.png";
// import Abtbanner from "../assets/Aboutbanner2.jpg";
import Abtbanner from "../assets/About0002.png";
import Sir from "../assets/Sirimg01.png";
import Mam from "../assets/poojamaam.png";
import Kunalsir from "../assets/kunalsir.png";
import Vison from "../assets/visson.png";
import Misson from "../assets/misson.png";


const About = () => {
  return (
    <>
    
      <div className="about-banner-container">
        <img src={Abtbanner} alt="" />
      </div>
      <div className="container about-main-container">
        <h1 className="about-header text-center ">
          About Our Company{" "}
          <span className="About-header-company-name ">
            {" "}
            "Udaan Eduservices"
          </span>
        </h1>
        <div className="core-value-container">
          <h1 className=""> Core Values</h1>
          <div className="inner-core-values">
            <p>
              {/* <span className="inner-count-core">1</span> */}
              शिक्षा
            </p>
            <p>
              {/* <span className="inner-count-core">2</span> */}
              संस्कार
            </p>
            <p>
              {/* <span className="inner-count-core">3</span> */}
              सेवा
            </p>
            <p>
              {/* <span className="inner-count-core">4</span> */}
              मानवता
            </p>
            <p>
              {/* <span className="inner-count-core">5</span> */}
              राष्ट्रीयता
            </p>
          </div>
        </div>
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
              <p>
                At Udaan360, we are committed to empowering individuals by
                providing comprehensive educational and career development
                services. Our platform offers a seamless journey from academic
                counseling and admissions guidance to skill enhancement and
                global career opportunities, particularly in healthcare and IT.​
              </p>
            </div>
          </div>
          <div className="inline vision-mission-container">
            <div className="vision-box">
              <div className="vison-img-content">
                <img src={Vison} className="vison-img" alt="vison" />
                <h2 className="heading-about vision-title">"Vision"</h2>
              </div>
              <div className="vison-line"></div>
              <div>
                <p className="vision-text">
                  " To be a trusted partner in every individual's &
                  institutional educational and professional journey,
                  facilitating success through tailored support and resources.​
                  "
                </p>
              </div>
            </div>
            <div className="mission-box">
              <div className="vison-img-content">
                <img src={Misson} className="vison-img" alt="misson" />
                <h2 className="heading-about mission-title">Mission</h2>
              </div>
              <div className="vison-line"></div>
              <div>
                <p className="mission-text">
                  To bridge the gap between education and employment by offering
                  integrated solutions that cater to the diverse needs of
                  students and professionals.​ <br />
                  <span className="highlight">Career Placement:</span>{" "}
                  Assistance in finding suitable employment opportunities, with
                  a focus on the healthcare and IT industries.​
                </p>
              </div>
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
                  With over 20 years of experience in the education domain in
                  India, I have worked with top academic institutions like
                  FIITJEE, RAO IIT, co-founded VISTAAR, and served as the CEO of
                  FTV-SOPA. Join me on my journey with Udaan360, where ethical
                  education paves the way for success. Together, let's transform
                  dreams into reality.
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
                    <h5>COO & Co-Founder</h5>
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
                    <h5>Director Placements</h5>
                  </div>
                </div>
                <p className="card__description">
                  Serial entrepreneur, with interest in Technology, Talent
                  Acquisition, Education and Sports, having exceptional sense
                  for money and accountability to go along with hunger for
                  numbers. Prolific recruitment pro with over 19+ years of total
                  experience completely in core recruitment having managed mid
                  management and leadership hiring across different domains,
                  skill and geographies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
