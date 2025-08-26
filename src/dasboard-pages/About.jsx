import React, { useState, useEffect, useRef } from "react";
import "./About.css";
// Importing image assets
// import study2 from "../assets/handholding.png";
import Abtbanner from "../assets/About0002.png";
import Sir from "../assets/Sirimg01.png";
import Mam from "../assets/poojamaam.png";
import Kunalsir from "../assets/kunalsir.png";
// import Vison from "../assets/visson.png";
// import Misson from "../assets/misson.png";

// Importing React Icons (Font Awesome icons converted to React Icons)
import {
  FaGraduationCap,
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaFlag,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

const About = () => {
  // useRef hook to reference the statistics section for IntersectionObserver
  const statsSectionRef = useRef(null);
  // useState hook to control when the animation starts
  const [hasAnimated, setHasAnimated] = useState(false);

  // useEffect hook to set up the IntersectionObserver
  useEffect(() => {
    if (statsSectionRef.current) {
      const element = statsSectionRef.current; // <- yaha copy kar liya
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHasAnimated(true);
            } else {
              setHasAnimated(false);
              const statNumbers = entry.target.querySelectorAll(".stat-number");
              statNumbers.forEach((numElement) => {
                numElement.textContent = "0";
              });
            }
          });
        },
        { root: null, rootMargin: "0px", threshold: 0.5 }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element); // <- ab wahi element use hoga, not ref.current
      };
    }
  }, []);
  // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // useEffect hook to handle the number animation
  useEffect(() => {
    // Only run animation if hasAnimated is true
    if (hasAnimated) {
      // Get all elements with the class 'stat-number' within the observed section
      const statNumbers = statsSectionRef.current.querySelectorAll(".stat-number");

      // Iterate over each number element to animate it
      statNumbers.forEach((numElement) => {
        const targetNumber = parseInt(numElement.dataset.count, 10); // Get the target number from data-count attribute
        let currentNumber = 0; // Initialize current number for animation
        const duration = 2000; // Animation duration in milliseconds
        const startTime = performance.now(); // Get the start time for consistent animation speed

        // Function to update the number during animation
        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime; // Calculate elapsed time
          const progress = Math.min(elapsedTime / duration, 1); // Calculate animation progress (0 to 1)

          // Calculate the current number based on progress
          currentNumber = Math.floor(progress * targetNumber);
          numElement.textContent = currentNumber.toLocaleString(); // Update text content with comma formatting

          // Continue animation if not yet at target and not finished
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Ensure the final number is exactly the target number
            numElement.textContent = targetNumber.toLocaleString();
          }
        };

        // Start the animation using requestAnimationFrame for smooth rendering
        requestAnimationFrame(animate);
      });
    }
  }, [hasAnimated]); // This effect runs whenever hasAnimated changes

  return (
    <>
      <div className="about-banner-container">
        <img src={Abtbanner} alt="" />
      </div>
      {/* //////////////////////// */}

      <section className="about-section">
        <div className="about-container">
          {/* <!-- Section Header --> */}
          <div className="about-header">
            <h2 className="about-title">
              <i>
                <FaGraduationCap />
              </i>

              About Udaan360
            </h2>
            <p className="about-subtitle">
              Empowering dreams through education with purpose, integrity, and
              excellence
            </p>
          </div>
          {/* <!-- Values Section with Hindi Words --> */}
          <div className="values-section">
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <FaGraduationCap />
                </div>
                <div className="value-hindi">शिक्षा</div>
                <div className="value-english">Education</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <FaHeart />
                </div>
                <div className="value-hindi">संस्कार</div>
                <div className="value-english">Values</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <FaHandsHelping />
                </div>
                <div className="value-hindi">सेवा</div>
                <div className="value-english">Service</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <FaUsers />
                </div>
                <div className="value-hindi">मानवता</div>
                <div className="value-english">Humanity</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <FaFlag />
                </div>
                <div className="value-hindi">राष्ट्रीयता</div>
                <div className="value-english">Nationalism</div>
              </div>
            </div>
          </div>

          {/* <!-- Our Story --> */}
          <div className="story-content">
            <p className="story-text">
              At Udaan360, we believe in education with purpose, empowering
              individuals with the right knowledge, skills, and opportunities
              to soar to new heights. Udaan360 is a premier education solutions
              provider, offering a 360-degree approach to academic and career
              success.
            </p>

            <p className="story-text">
              Rooted in excellence and guided by expertise, we empower students
              and professionals to achieve their dreams. Guided by the timeless
              teachings of Lord Krishna, we empower students and professionals
              to navigate their educational and career aspirations with clarity,
              confidence, and integrity.
            </p>

            <div className="krishna-quote">
              "Just as Lord Krishna guided Arjuna through the complexities of
              life, we guide each student through their educational journey with
              wisdom, compassion, and unwavering support."
            </div>

            <p className="story-text">
              At Udaan360, we are committed to empowering individuals by
              providing comprehensive educational and career development
              services. Our platform offers a seamless journey from academic
              counseling and admissions guidance to skill enhancement and global
              career opportunities.
            </p>
          </div>

          {/* Vision & Mission  */}
          <div className="vision-mission">
            <div className="vm-card vision-card" onClick={() => { /* add expandCard logic here */ }}>
              <div className="vm-header">
                <div className="vm-icon">
                  <FaEye />
                </div>
                <h3 className="vm-title">Vision</h3>
              </div>
              <p className="vm-content">
                To be a trusted partner in every individual's & institutional
                educational and professional journey, facilitating success
                through tailored support and resources.
              </p>
            </div>

            <div className="vm-card mission-card" onClick={() => { /* add expandCard logic here */ }}>
              <div className="vm-header">
                <div className="vm-icon">
                  <FaBullseye />
                </div>
                <h3 className="vm-title">Mission</h3>
              </div>
              <p className="vm-content">
                To bridge the gap between education and employment by offering
                integrated solutions that cater to the diverse needs of students
                and professionals, with specialized focus on career placement
                assistance . </p>
            </div>
          </div>

          {/* <!-- Statistics - This section will be observed for animation --> */}
          <div className="stats-section" ref={statsSectionRef}>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number" data-count="25000">0</div>
                <div className="stat-label">Students Counselled</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="25">0</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="99">0</div>
                <div className="stat-label">Visa Success Rate (%)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="5000">0</div>
                <div className="stat-label">Global Placements</div>
              </div>
            </div>
          </div>

          {/* <!-- Team Section --> */}
          <div className="team-section">
            <h3 className="team-title">
              <i> <FaUsers />  </i>
              Our Leadership Team
            </h3>

            <div className="team-grid">
              {/* <!-- Team Member 1 --> */}
              <div className="team-member">
                <div className="member-photo">
                  <img
                    src={Sir}
                    alt="Ankur Tyagi"
                  // Removed onerror, safer to handle image loading in React
                  />
                </div>
                <h4 className="member-name">Ankur Tyagi</h4>
                <p className="member-position">CEO & Founder</p>
                <p className="member-bio">
                  With over 20 years of experience in the education domain in
                  India, I have worked with top academic institutions like
                  FIITJEE, RAO IIT, co-founded VISTAAR, and served as the CEO of
                  FTV-SOPA. Join me on my journey with Udaan360, where ethical
                  education paves the way for success. Together, let's transform
                  dreams into reality.
                </p>
              </div>

              {/* <!-- Team Member 2 --> */}
              <div className="team-member">
                <div className="member-photo">
                  <img
                    src={Mam}
                    alt="Pooja Aggarwal"
                  // Removed onerror, safer to handle image loading in React
                  />
                </div>
                <h4 className="member-name">Pooja Aggarwal</h4>
                <p className="member-position">COO & Co-Founder</p>
                <p className="member-bio">
                  With 18 years of experience in education sector, my mission
                  has always been to empower students with the right guidance
                  and opportunities. At Udaan360, I am committed to provide
                  ethical counselling, quality education, and global career
                  pathways.
                </p>
              </div>

              {/* <!-- Team Member 3 --> */}
              <div className="team-member">
                <div className="member-photo">
                  <img
                    src={Kunalsir}
                    alt="Kunal Handu"
                  // Removed onerror, safer to handle image loading in React
                  />
                </div>
                <h4 className="member-name">Kunal Handu</h4>
                <p className="member-position">Director Placements</p>
                <p className="member-bio">
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
      </section>
    </>
  );
};

export default About;
