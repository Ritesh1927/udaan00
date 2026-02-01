// import React from "react";
// import "./Home.css";
// import Cards from "../component/cards/Cards";
// import Homeimg from "../assets/home.png";
// import Videobg from "../component/videobg/Videobg";
// import WhatsAppButton from "../common-component/whatsup/WhatsAppButton";
// import Carousel from "../component/carousel/Carousel";
// import TestimonialSlider from "./Testimonials";
// import ResultCards from "../component/resultcards/ResultCards";
// import BlinkingStrip from "../component/strip/BlinkingStrip";
// import Faq from "../component/faq/Faq";
// import AdmissionUpdate from "../component/admissionupdate/AdmissionUpdate";
// import FooterUniversity from "../common-component/footeruniversity/FooterUniversity";

// const Home = () => {
//   return (
//     <>
//       <div>
//         {/* <BlinkingStrip /> */}
//       </div>
//       <div>
//         <Carousel />
//       </div>
//       <section className="">
//         <div>
//           <ResultCards />
//         </div>
//         <div className="inner-container ">
//           <div className="container inline welcome-heading mt20">
//             <div className="left-home-container">
//               <div>
//                 <h2 className="welcome-tag platform-quote">

//                   "Empowering Your Journey: From Education to Elevation"
//                 </h2>
//                 <p className="welcome-tag2">
//                   <span className="brand-highlight"> Udaan360:</span> A
//                   comprehensive Platform for all your educational needs- Test
//                   Preparations, Admissions, Skill Development, and Career
//                   Placement.
//                 </p>
//               </div>

//             </div>
//             <div className="home-banner-img">
//               <img src={Homeimg} alt="" />
//             </div>
//           </div>


//           <div className="video-container-wrapper ">
//             <Videobg />
//           </div>


//           <section className="benefits-section">
//             <div className="benefits-container">
//               <div className="benefits-header">
//                 <h1 className="home-cards-section-heading ">
//                   What's in it for you!
//                 </h1>
//               </div>
//               <Cards />
//             </div>
//           </section>
//         </div>
//         <AdmissionUpdate />
//         <div className="shloak-container">
//           <h1 className="upper-shloak">
//             <p>
//               {" "}
//               " विद्यां चाविद्यां च यस्तद्वेदोभयं सह।
//               <br />
//               अविद्यया मृत्युं तीर्त्वा विद्ययामृतमश्नुते॥ "
//             </p>
//           </h1>

//           <div className="english-translation">
//             <h2 className="english-shloak">
//               "One who understands both knowledge (Vidya) and ignorance (Avidya)
//               together, transcends ignorance and attains immortality through
//               knowledge."
//             </h2>
//           </div>
//         </div>
//       </section>

//       <div className="parallax"></div>
//       <div>
//         <Faq />
//       </div>
//       <WhatsAppButton />
//       <div className="Form-forward-container">
//         <TestimonialSlider />
//       </div>
//       <FooterUniversity />
//     </>
//   );
// };

// export default Home;
// import React, { useState } from 'react'
import "../dasboard-pages/Home.css"
// import { ArrowLeft, ArrowRight } from "lucide-react";
import shapone from "../assets/diamond.svg"
import bottom from "../assets/homedown.svg"
import GradientCarousel from "../component/carouselhome/GradientCarousel"
import ResultCards from "../component/resultcards/ResultCards"
import SemiCircularSelector from "../component/rotationbulb/SemiCircularSelector"
import Videobg from "../component/videobg/Videobg"
import Programcontent from "../component/programcontent/Programcontent"
import Cards from "../component/cards/Cards"
import TestimonialSlider from "./Testimonials2"
import Faq from "../component/faq/Faq"

const Home = () => {

  return (
    <>
      <div className='z-20 xl-[90%] w-full sm:p-[12px] md:w-[80%] m-auto' >
        <div className="relative">
          <h1 className="w-full text-[32px]   leading-[1.1]
    tracking-tight sm:text-[42px] md:text-[50px] lg:text-[70px] text-center text-white capitalize mt-[50px] "  >
            Empowering Your Journey: From Education to Elevation
          </h1>
          <img loading="lazy" className="absolute right-0 top-[50%] little-star" src={shapone} alt="loading" />
          <p className=" w-full sm:w[90%] text-[16px] md:w-[90%] m-auto xl:w-[70%] text-center text-white capitalize mt-[20px] " >Udaan360: A comprehensive Platform for all your educational needs- Test Preparations, Admissions, Skill Development, and Career Placement.</p>
          <img className="absolute bottom-[-80px]" src={bottom} alt="" />
        </div>

      </div >
      <div className="my-[150px]">
        <GradientCarousel />
      </div>
      {/*/////  results container  /////*/}
      <div className="exams-result-container">
        <ResultCards />
      </div>
      <div>
        <h1 className=" lg:text-[50px] text-white text-center my-[30px] ">Career Cycle Of Student </h1>
        <SemiCircularSelector />
      </div>
      {/* Top Ranked programs in India  */}
      <div>
        <Programcontent />
      </div>
      <div>
        <Videobg />
      </div>
      {/* Cards Section */}
      <section className="benefits-section m-auto sm:mb-[80px] w-[82%]">

        <Cards />

      </section>
      <section className="mt-[50px]">
        <Faq />
      </section>
      <section>
        <TestimonialSlider />
      </section>
    </>
  )
}

export default Home 