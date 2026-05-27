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
      <div className="relative z-20 w-full px-3 overflow-x-hidden overflow-y-hidden sm:px-4">
        <div className="relative mx-auto w-full md:w-[80%] xl:w-[90%] py-10">

          <h1
            className="
        w-full
        text-[26px]
        leading-tight
        tracking-tight
        text-center
        text-white
        capitalize
        sm:text-[36px]
        md:text-[48px]
        lg:text-[64px]
        mt-10
      "
          >
            Empowering Your Journey: From Education to Elevation
          </h1>

          {/* Top Right Decorative Image */}
          <img
            src={shapone}
            alt=""
            className="
        pointer-events-none
        absolute
        top-1/2
        right-2
        w-[60px]
        -translate-y-1/2
        opacity-80
        sm:w-[40px]
        md:w-[50px]
        lg:w-[80px]
        little-star
      "
          />

          <p
            className="
        mx-auto
        mt-5
        w-full
        text-[18px]
        text-center
        text-white
        capitalize
        sm:w-[90%]
        md:text-[18px]
        xl:w-[70%]
      "
          >
            Udaan360: From elite competitive exam preparation to global admissions
            strategy, industry-aligned skill mastery, and career outcomes, Udaan360
            curates a seamless, end-to-end education experience—designed for excellence,
            guided by expertise, and defined by results
          </p>

          {/* Bottom Decorative Image */}
          <img
            src={bottom}
            alt=""
            className="
        pointer-events-none
        absolute
        bottom-[15px]
        left-1/2
        w-[280px]
        -translate-x-1/2
        opacity-90
        sm:w-[180px]
        md:bottom-[-30px]
        md:w-[220px]
        lg:w-[260px]
      "
          />

        </div>
      </div>



      <div className="md:my-[150px] sm:my-[50px]">
        <GradientCarousel />
      </div>
      {/*/////  results container  /////*/}
      <div className="exams-result-container">
        <ResultCards />
      </div>
      <div>
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
      <section className="benefits-section m-auto sm:mb-[80px] w-[90%]">

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