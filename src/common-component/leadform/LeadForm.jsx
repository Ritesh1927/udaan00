import React from "react";
import "./LeadForm.css";

const LeadForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="lead-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2>Get Free Career Counselling</h2>
          <p>Take the first step towards your dream career</p>
        </div>

        <div className="features-grid">
          <div>✅ Expert Guidance</div>
          <div>✅ Career Roadmap</div>
          <div>✅ Course Selection</div>
          <div>✅ Admission Support</div>
          <div>✅ Scholarship Info</div>
          <div>✅ 100% Free Session</div>
        </div>

        <form className="lead-form">
          <input type="text" placeholder="Full Name *" required />
          <input type="email" placeholder="Email Address *" required />
          <input type="tel" placeholder="Phone Number *" required />

          <label className="select-label">
            Current Education Level
            <select required>
              <option value="">Select your education level</option>
              <option>12th Appearing</option>
              <option>12th Completed</option>
              <option>Graduation Pursuing</option>
              <option>Graduation Completed</option>
              <option>Post Graduation</option>
              <option>Working Professional</option>
            </select>
          </label>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
