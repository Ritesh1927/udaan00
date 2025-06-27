import React, { useState } from "react";
import "./HomeForm.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
// import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const HomeForm = () => {
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
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Submission failed";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <>Hey this form belongs to Home page </> */}

      <div className="home-form">
        <form onSubmit={handleSubmit}>
          <div className="regiter-elements-content">
            {/* Name */}
            <div
              className={`form-fill-section-home upper-section-form ${
                focusedField === "name" ? "focused" : ""
              }`}
            >
              <i>
                <IoPersonOutline />
              </i>
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
              className={`form-fill-section-home upper-section-form ${
                focusedField === "mobile" ? "focused" : ""
              }`}
            >
              <i>
                <LuPhone />
              </i>
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
          </div>
          <div className="regiter-elements-content">
            {/* Email */}
            <div
              className={`form-fill-section-home ${
                focusedField === "email" ? "focused" : ""
              }`}
            >
              <i>
                <IoMailOutline />
              </i>
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
              className={`form-fill-section-home ${
                focusedField === "percentage" ? "focused" : ""
              }`}
            >
              <i>
                <TbCirclePercentage />
              </i>
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
          </div>
          {/* Course Dropdown */}
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

          {/* Exam Section */}
          <div className="exam-section-home">
            <label className="exam-question-home">
              Did you appear in any competitive exam?
            </label>
            <div className="exam-options-home">
              <label className="yes-home">
                <input
                  type="radio"
                  name="appearedInExam"
                  value="yes"
                  checked={formData.appearedInExam === "yes"}
                  onChange={handleInputChange}
                />
                Yes
              </label>
              <label className="yes-home">
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
              <div className="regiter-elements-content">
                <div
                  className={`form-fill-section-home upper-section-form ${
                    focusedField === "examName" ? "focused" : ""
                  }`}
                >
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
                  className={`form-fill-section-home upper-section-form ${
                    focusedField === "examPercentage" ? "focused" : ""
                  }`}
                >
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
              className="Register-b-wrap"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Connect With Us "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeForm;
