import React from "react";
import "./StreamSelection.css";

const StreamSelection = () => {
  return (
    <div className="stream-container">
      <section className="stream-hero">
        <h1 className="hero-heading">
          Choose the Right Stream with <span>Udaan360</span>
        </h1>
        <p className="hero-text">
          Get expert guidance to find the stream that matches your passion,
          skills, and goals.
        </p>
      </section>

      <section className="stream-info">
        <h2 className="section-heading">Why Stream Selection is Important?</h2>
        <p className="section-text">
          Your stream after 10th or 12th defines your future career path. We
          help you evaluate all options and guide you toward a decision that
          fits you best.
        </p>
      </section>

      <section className="stream-services">
        <h2 className="section-heading">What We Offer</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3 className="service-title">Career Assessment</h3>
            <p className="service-text">
              Identify your interests and skills using scientific tools.
            </p>
          </div>
          <div className="service-item">
            <h3 className="service-title">1-on-1 Counseling</h3>
            <p className="service-text">
              Speak with experienced counselors for personalized advice.
            </p>
          </div>
          <div className="service-item">
            <h3 className="service-title">Stream Recommendation</h3>
            <p className="service-text">
              Get a full report suggesting your best-fit stream.
            </p>
          </div>
        </div>
      </section>

      <section className="stream-steps">
        <h2 className="section-heading">How We Help You</h2>
        <ul className="steps-list">
          <li className="step">✔ Take Career Test</li>
          <li className="step">✔ Attend Counseling Session</li>
          <li className="step">✔ Receive Detailed Report</li>
          <li className="step">✔ Decide Your Stream</li>
        </ul>
      </section>

      <section className="stream-cta">
        <h2 className="cta-heading">Need Help Choosing Your Stream?</h2>
        <p className="cta-text">
          Our experts are here to guide you. Book your free session now!
        </p>
        <button className="cta-button">
          {" "}
          <a
            href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
            target="_blank"
          >
            {" "}
            Book a Free Session
          </a>{" "}
        </button>
      </section>
    </div>
  );
};

export default StreamSelection;
