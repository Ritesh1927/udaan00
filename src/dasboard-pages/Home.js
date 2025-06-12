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
// import HomeForm from "../common-component/homeform/HomeForm";
import AdmissionUpdate from "../component/admissionupdate/AdmissionUpdate";

const Home = () => {
  return (
    <>
      <div>
        <BlinkingStrip />
      </div>
      <div>
        <Carousel />
      </div>
      <section className="">
        <div className="container">
          <h1 className="home-cards-section-heading">Check Your Result Now </h1>
          <ResultCards />
        </div>
        <div className="inner-container ">
          <div className="welcome-heading inline mt20 container">
            <div className="left-home-container">
              <div>
                <h2 className="welcome-tag platform-quote">
                  {/* Welcome to <span className="udaan-name">UDAAN</span> */}
                  "Empowering Your Journey: From Education to Elevation"
                </h2>
                <p className="welcome-tag2">
                  <span className="brand-highlight"> Udaan360:</span> A
                  comprehensive Platform for all your educational needs- Test
                  Preparations, Admissions, Skill Development, and Career
                  Placement.
                </p>
              </div>

              {/* ///////////////////////////////// */}
            </div>

            <div className="home-banner-img">
              <img src={Homeimg} alt="" />
            </div>
          </div>
          {/* //////  Home Form   //////////// */}
          {/* <div className="container">
            <HomeForm />
          </div> */}
          {/* ////////////////video tag /////////////////// */}
          <div className="video-container-wrapper ">
            <Videobg />
          </div>

          {/* Cards Section */}
          <section className="benefits-section">
            <div className="benefits-container">
              <div className="benefits-header">
                <h1 className="home-cards-section-heading ">
                  What's in it for you!
                </h1>
              </div>
              <Cards />
            </div>
          </section>
        </div>
        <AdmissionUpdate />
        <div className="shloak-container">
          <h1 className="upper-shloak">
            <p>
              {" "}
              " विद्यां चाविद्यां च यस्तद्वेदोभयं सह।
              <br />
              अविद्यया मृत्युं तीर्त्वा विद्ययामृतमश्नुते॥ "
            </p>
          </h1>

          <div className="english-translation">
            <h2 className="english-shloak">
              "One who understands both knowledge (Vidya) and ignorance (Avidya)
              together, transcends ignorance and attains immortality through
              knowledge."
            </h2>
          </div>
        </div>
      </section>

      <div className="parallax"></div>
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
