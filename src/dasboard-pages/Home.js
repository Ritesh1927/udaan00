import React from "react";
import "./Home.css";
import Cards from "../component/cards/Cards";
import { FaUserPlus, FaClipboardList, FaCheckCircle } from "react-icons/fa"; // Example icons
import Img from "../assets/dart-board.png";
import Img2 from "../assets/card2.png";
import Img3 from "../assets/icon1.png";
import Img4 from "../assets/advisor.png";
import Img5 from "../assets/confidence.png";
import Homeimg from "../assets/home.png";
import Videobg from "../component/videobg/Videobg";
import WhatsAppButton from "../common-component/whatsup/WhatsAppButton";
import Carousel from "../component/carousel/Carousel";
import TestimonialSlider from "./Testimonials";
import ResultCards from "../component/resultcards/ResultCards";
import BlinkingStrip from "../component/strip/BlinkingStrip";
import Faq from "../component/faq/Faq";

const Home = () => {
  return (
    <>
      <div>
        <BlinkingStrip />
      </div>
      <div>
        <Carousel />
      </div>
      <section className="container">
        <div>
          <h1 className="home-cards-section-heading">Check Your Result Now </h1>
          <ResultCards />
        </div>
        <div className="inner-container">
          <div className="welcome-heading inline mt20">
            <div className="left-home-container">
              <div>
                <p className="welcome-tag">
                  {/* Welcome to <span className="udaan-name">UDAAN</span> */}
                  "Empowering Your Journey: From Education to Elevation"
                </p>
                <p className="welcome-tag2">
                  Udaan360: A comprehensive Platform for all your educational
                  needs- Test Preparations, Admissions, Skill Development, and
                  Career Placement.
                </p>
              </div>

              {/* ///////////////////////////////// */}
            </div>

            <div className="home-banner-img">
              <img src={Homeimg} alt="" />
            </div>
          </div>
          {/* ////////////////video tag /////////////////// */}
          <div className="video-container-wrapper">
            <Videobg />
          </div>

          {/* Cards Section */}
          <h1 className="home-cards-section-heading ">What's in it for you!</h1>
          <div className="start-parent-cont">
            <div className="start-child-cont">
              <Cards
                src={Img3}
                head="Explore and be aware"
                content="Explore hundreds of career options and academic pathways."
                className="step-1-card"
                buttonclass="step-1-button"
              />
            </div>
            <div className="start-child-cont">
              <Cards
                src={Img2}
                icon={<FaClipboardList size={40} color="#9364D4" />}
                head="Discover your abilities and skills"
                content="
             Use scientific diagnostic tools to recognise your abilities and interests.
            "
                className="step-2-card"
                buttonclass="step-2-button"
              />
            </div>
            <div className="start-child-cont">
              <Cards
                src={Img}
                head="Set realistic career goals"
                content="Select career paths aligned with your interests, skills and aptitude."
                className="step-3-card"
                buttonclass="step-3-button"
              />
            </div>
            <div className="start-child-cont">
              <Cards
                src={Img4}
                head="Get Guidance from experienced counsellors"
                content="Gain clarity and select your career or academic options with expert guidance."
                className="step-4-card"
                buttonclass="step-4-button"
              />
            </div>
            <div className="start-child-cont">
              <Cards
                src={Img5}
                head="Boost confidence"
                content="Eliminate doubt and be confident about your career and academic pathways."
                className="step-5-card"
                buttonclass="step-5-button"
              />
            </div>
          </div>
        </div>
        <div className="shloak-container">
          <h1 className="upper-shloak">
            <span className="">"</span> विद्यां चाविद्यां च यस्तद्वेदोभयं सह।
          </h1>
          <h1 className="lower-shloak">
            अविद्यया मृत्युं तीर्त्वा विद्ययामृतमश्नुते॥ <span>"</span>
          </h1>

          <div>
            <h2 className="english-shloak">
              "One who understands both knowledge (Vidya) and ignorance (Avidya)
              together, transcends ignorance and attains immortality through
              knowledge."
            </h2>
          </div>
        </div>
      </section>

      <div className="parallax mt40"></div>
      <div>
        <Faq />
      </div>
      <WhatsAppButton />
      <div className="Form-forward-container">
        <TestimonialSlider />
      </div>
    </>
  );
};

export default Home;
