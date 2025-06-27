import React, { useState } from "react";
import "./LeadForm.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

const LeadForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    percentage: "",
    appearedInExam: "no", // new field
    examName: "", // new field
    examPercentage: "", // new field
  });
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const courses = ["BCA", "MCA", "B.TECH", "M.TECH", "BBA", "MBA", "MBBS"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting to:", `${window.location.origin}/api/franchise`);

    try {
      const payload = { ...formData, course: selectedCourse };
      // If user didn't appear in exam, remove exam related fields from payload
      if (formData.appearedInExam === "no") {
        delete payload.examName;
        delete payload.examPercentage;
      }
      console.log("Payload:", payload);
      // console.log(payload);
      const response = await axios.post("/api/contact", payload, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(response.data.message);
      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        percentage: "",
        appearedInExam: "no",
        examName: "",
        examPercentage: "",
      });
      setSelectedCourse("");
          // ✅ Close modal after 3 seconds
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Submission failed";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (  
    <div className="modal-overlay">
      <div className="lead-modal">
        <button className="close-button" onClick={onClose}>
          <i>
            <FaTimes />{" "}
          </i>
        </button>
        <div className="modal-header">
          <h2>Get Free Career Counselling</h2>
          <p>Take the first step towards your dream career</p>
        </div>
        <div className="lead-form-body">
          <div className="lead-benifits">
            <h4>What You'll Get:</h4>
            <div className="features-grid">
              <div className="feature-check">
                <i>
                  <FaCheck />
                </i>
                Expert Guidance
              </div>
              <div className="feature-check">
                <i>
                  <FaCheck />
                </i>{" "}
                Career Roadmap
              </div>
              <div className="feature-check">
                <i>
                  <FaCheck />
                </i>{" "}
                Course Selection
              </div>
              <div className="feature-check">
                <i>
                  <FaCheck />
                </i>{" "}
                Admission Support
              </div>
              <div className="feature-check">
                <i>
                  <FaCheck />
                </i>{" "}
                Scholarship Info
              </div>
              <div className="feature-check">
                <i>
                  <FaCheck />
                </i>{" "}
                100% Free Session
              </div>
            </div>
          </div>

          <div className="">
            <form onSubmit={handleSubmit}>
              {/* <div className="regiter-elements-content"> */}
              {/* Name */}
              <div
                className={`lead-form-group ${
                  focusedField === "name" ? "focused" : ""
                }`}
              >
                <label htmlFor="">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Full Name"
                  className="register-input-section"
                  required
                />
              </div>

              {/* Mobile */}
              <div
                className={`lead-form-group ${
                  focusedField === "mobile" ? "focused" : ""
                }`}
              >
                <label htmlFor="">Phone Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("mobile")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Mobile Number"
                  className="register-input-section"
                  required
                />
              </div>
              {/* </div> */}
              {/* <div className="regiter-elements-content"> */}
              {/* Email */}
              <div
                className={`lead-form-group  ${
                  focusedField === "email" ? "focused" : ""
                }`}
              >
                <label htmlFor="">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Email"
                  className="register-input-section"
                  required
                />
              </div>

              {/* Percentage */}
              <div
                className={`lead-form-group  ${
                  focusedField === "percentage" ? "focused" : ""
                }`}
              >
                <label htmlFor="">12th Percentage *</label>
                <input
                  type="number"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("percentage")}
                  onBlur={() => setFocusedField("")}
                  placeholder="12th Percentage"
                  className="register-input-section"
                  required
                />
              </div>
              {/* </div> */}
              {/* Course Dropdown */}
              <div className="lead-form-group ">
                <label htmlFor="">Area of Interest *</label>
                <select
                  className={`course-dropdown ${
                    focusedField === "dropdown" ? "focused" : ""
                  }`}
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  onFocus={() => setFocusedField("dropdown")}
                  onBlur={() => setFocusedField("")}
                  required
                  name="dropdown"
                  type="dropdown"
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Exam Section */}
              <div className="exam-section-home lead-form-group">
                <label className="">
                  Did you appear in any competitive exam?
                </label>
                <div className="exam-options-home-modal">
                  <label className="yes-home-modal">
                    <input
                      type="radio"
                      name="appearedInExam"
                      value="yes"
                      checked={formData.appearedInExam === "yes"}
                      onChange={handleInputChange}
                    />
                    Yes
                  </label>
                  <label className="yes-home-modal">
                    <input
                      type="radio"
                      name="appearedInExam"
                      value="no"
                      checked={formData.appearedInExam === "no"}
                      onChange={handleInputChange}
                    />
                    No
                  </label>
                </div>

                {formData.appearedInExam === "yes" && (
                  <div className="regiter-elements-content-modal">
                    <div
                      className={`lead-form-group  ${
                        focusedField === "examName" ? "focused" : ""
                      }`}
                    >
                      <label htmlFor="">Exam Name *</label>
                      <input
                        type="text"
                        name="examName"
                        value={formData.examName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("examName")}
                        onBlur={() => setFocusedField("")}
                        placeholder="Name of Exam"
                        className="register-input-section yes-no-section"
                        required
                      />
                    </div>
                    <div
                      className={`lead-form-group  ${
                        focusedField === "examPercentage" ? "focused" : ""
                      }`}
                    >
                      <label htmlFor="">Exam Percnetage* </label>
                      <input
                        type="number"
                        name="examPercentage"
                        value={formData.examPercentage}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("examPercentage")}
                        onBlur={() => setFocusedField("")}
                        placeholder="Percentage in Exam"
                        className="register-input-section yes-no-section"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="register-btn-container">
                <button
                  className="lead-form-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Connect With Us "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
           <ToastContainer
      position="top-right"
      autoClose={3000} // automatically close after 3 seconds
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
    </div>
  );
};

export default LeadForm;
