import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import Kartikey from "../assets/kartikey.jpg";
import Kartikey02 from "../assets/Kartikey2.jpg";
import Mehak2 from "../assets/mehak2.jpg";
import Anjali2 from "../assets/anjali2.jpg";
import Suhani from "../assets/suhani.jpg";
import Vinay from "../assets/vinay.jpg";
import Ashi from "../assets/ashi2.jpg";
import Ritik from "../assets/ritik.jpg";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    image: Kartikey02,
    title: "Best Career Guidance & B. Tech Admission",
    description:
      "Udaan 360 provided exceptional career counselling, helping me choose the best engineering college (ABES) for my B.Tech. Their expert guidance and admission support made the entire process seamless!",
    name: " Kartikey Verma",
    role: " B. Tech (Computer Science) Student",
  },
  {
    image: Mehak2,
    title: "MBBS Admission Made Easy",
    description:
      "Getting into a top medical college seemed like a challenge, but with Udaan 360’s genuine counselling and admission support, my daughter secured MBBS seat in Kempagowda, Bangalore. Thank you for making our dream come true!",
    name: " Mehak Kumar",
    role: "MBBS Student",
  },
  {
    image: Anjali2,
    title: "Trusted Guidance for My BDS Admission",
    description:
      "Udaan 360 guided me through every step of my BDS admission. Their transparent approach and strong college connections helped us get into Rajiv Gandhi Dental college in Bangalore.",
    name: "Anjali ,",
    role: "BDS Student",
  },
  {
    image: Suhani,
    title: "JEE Counselling & Top B.Tech College Admission",
    description:
      "Udaan 360 guided me through every step of my BDS admission. Their transparent approach and strong college connections helped us get into Rajiv Gandhi Dental college in Bangalore.",
    name: "Megha,",
    role: "B.Tech (CSE) Student",
  },
  {
    image: Vinay,
    title: "The Best Study Abroad Counselling & Admission Assistance",
    description:
      "I was confused about choosing the best college and destination for my master’s degree, but Udaan 360 provided clear guidance, financial aid options, and admission support. Highly recommended!",
    name: "Sachin Yadav",
    role: "MBA Stundet",
  },
  {
    image: Ritik,
    title: "Smooth & Genuine Admission Process for PGDM",
    description:
      "With so many colleges and options, it was overwhelming to make the right choice. Thanks to Udaan 360, I got admission to a top Business school (IIM Udaipur) with complete clarity and no stress!",
    name: "Ritik Choudhary,",
    role: "PGDM Student ,",
  },
  {
    image: Kartikey,
    title: "Stress-Free College Admission for My Son",
    description:
      "As a parent, I was worried about my son’s future. Udaan 360 ensured a smooth and ethical coaching and admission process for his BPT (NIMS, Greater Noida) making everything easy for us!",
    name: "Rajiv Ranjan,",
    role: "Parent of a BPT Student",
  },
  {
    image: Ashi,
    title: "Best Counselling for B. Tech Admission",
    description:
      "Udaan 360’s expert counsellors helped me plan my JEE preparation and choose the best engineering course and college (MIT). Their knowledge and support made all the difference!",
    name: "Ashi Gupta,",
    role: "B.Tech (AIML) Student",
  },
];

const TestimonialSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonial-slider">
      <div className="testimonial-slider__header">
        <h2 className="testimonial-slider__heading">
          What Students & Parents Say About Us!
        </h2>
        <div className="testimonial-slider__arrows">
          <button
            className="testimonial-slider__arrow-btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            ←
          </button>
          <button
            className="testimonial-slider__arrow-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            →
          </button>
        </div>
      </div>
      <div className="testimonial-slider__container">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="testimonial-slider__card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-slider__user-img"
                />
                <h3 className="testimonial-slider__title">"{item.title}"</h3>
                <p className="testimonial-slider__desc">{item.description}</p>
                <div className="testimonial-slider__author">{item.name}</div>
                <div className="testimonial-slider__role">{item.role}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="testimonial-slider__button-container">
        <button className="testimonial-slider__button">
          <a
            className="testimonial-slider__button-a"
            target="blank"
            href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more
"
          >
            Book Your Career Counselling Session
          </a>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
