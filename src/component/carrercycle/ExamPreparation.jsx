import React from "react";
import "./ExamPreparation.css";

const ExamPreparation = () => {
  return (
    <div className="exam-container">
      <section className="exam-hero">
        <h1 className="exam-title">Your Exam Success Starts with Udaan360</h1>
        <p className="exam-subtitle">
          Whether it's IELTS or other competitive exams for India or Abroad, we
          help you prepare with confidence.
        </p>
      </section>

      <section className="exam-intro">
        <h2 className="section-heading">We Prepare You for Success</h2>
        <p className="section-text">
          Udaan360 offers personalized preparation support for a range of exams
          like IELTS, TOEFL, SAT, GRE, and Indian entrance exams such as CUET,
          JEE, NEET, and more. Our mentors and resources are tailored to your
          exam goals.
        </p>
      </section>

      <section className="exam-services">
        <h2 className="section-heading">Our Preparation Services</h2>
        <div className="service-grid">
          <div className="service-box">
            <h3>IELTS Coaching</h3>
            <p>
              Improve your reading, writing, speaking & listening skills with
              expert trainers.
            </p>
          </div>
          <div className="service-box">
            <h3>TOEFL/SAT/GRE</h3>
            <p>
              Get complete guidance and test strategies to ace international
              entrance exams.
            </p>
          </div>
          <div className="service-box">
            <h3>CUET / JEE / NEET</h3>
            <p>
              Crack Indian competitive exams with subject-wise coaching and mock
              tests.
            </p>
          </div>
          <div className="service-box">
            <h3>Doubt Solving Sessions</h3>
            <p>
              Daily doubt-solving and mentoring to ensure no student is left
              behind.
            </p>
          </div>
        </div>
      </section>

      <section className="exam-benefits">
        <h2 className="section-heading">Why Choose Udaan360?</h2>
        <ul className="benefits-list">
          <li>✅ Personalized Study Plans</li>
          <li>✅ Online & Offline Classes</li>
          <li>✅ Regular Mock Tests</li>
          <li>✅ One-on-One Mentoring</li>
          <li>✅ Expert Faculty Guidance</li>
        </ul>
      </section>

      <section className="exam-cta">
        <h2>Start Your Preparation Journey Today</h2>
        <p>
          Talk to our counselor and choose the right coaching plan for your
          exam.
        </p>
        <button className="exam-button">
          <a
            href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
            target="_blank"
          >
            {" "}
            Get Free Consultation
          </a>
        </button>
      </section>
    </div>
  );
};

export default ExamPreparation;
