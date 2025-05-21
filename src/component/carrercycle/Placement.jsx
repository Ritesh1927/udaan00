import React from "react";
import "./Placement.css";

const Placement = () => {
  return (
    <div className="placement-container">
      {/* Hero Section */}
      <section className="placement-hero">
        <h1 className="placement-title">
          Unlock Global Career Opportunities with Udaan360
        </h1>
        <p className="placement-subtitle">
          We connect students to top placement opportunities through our trusted
          partner <strong>Innovation</strong> and also offer special support for
          overseas placements, especially in the healthcare sector.
        </p>
      </section>

      {/* Our Partner Section */}
      <section className="partner-section">
        <h2 className="section-heading">Our Partner – Innovation</h2>
        <p className="section-text">
          <strong>Innovation</strong> is our official placement partner, working
          closely with us to provide placement support across various domains.
          Together, we guide and prepare students for interviews and job offers
          across India and beyond.
        </p>
      </section>

      {/* Abroad Nursing Placement */}
      <section className="abroad-section">
        <h2 className="section-heading">
          Placement Abroad for Nursing Professionals
        </h2>
        <p className="section-text">
          We specialize in helping qualified nursing students find career
          opportunities in countries like the UK, Germany, Canada, and
          Australia. From application to visa assistance – we support every step
          of the journey.
        </p>
        <ul className="abroad-list">
          <li>✅ CV Building & Documentation</li>
          <li>✅ Interview Preparation</li>
          <li>✅ Visa Support & Guidance</li>
          <li>✅ End-to-End Mentorship</li>
        </ul>
      </section>

      {/* How We Help Section */}
      <section className="help-section">
        <h2 className="section-heading">How Udaan360 Supports You</h2>
        <div className="help-grid">
          <div className="help-card">
            <h3>Career Counselling</h3>
            <p>
              Personalized sessions to understand your goals and choose the
              right path.
            </p>
          </div>
          <div className="help-card">
            <h3>Training & Soft Skills</h3>
            <p>
              We train students for interviews, communication, and workplace
              readiness.
            </p>
          </div>
          <div className="help-card">
            <h3>Domestic & International Jobs</h3>
            <p>
              We connect you with job openings locally and internationally based
              on your qualification.
            </p>
          </div>
          <div className="help-card">
            <h3>Ongoing Support</h3>
            <p>
              We stay in touch and help even after placement to ensure your
              smooth transition.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="placement-cta">
        <h2>Ready to Begin Your Career Journey?</h2>
        <p>Get in touch with our placement team and start preparing today!</p>
        <button className="placement-button">
          <a href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more">
            {" "}
            Contact Our Team
          </a>
        </button>
      </section>
    </div>
  );
};

export default Placement;
