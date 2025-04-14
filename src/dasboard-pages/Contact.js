// Corrected import section (add this at the top of your file)
/*import { 
  IoPersonOutline,
  IoMailOutline 
} from "react-icons/io5";
import { 
  LuPhone 
} from "react-icons/lu";
import { 
  TbCirclePercentage 
} from "react-icons/tb";
import { 
  FaLocationDot 
} from "react-icons/fa6";*/

import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";
import MapLocation from "../component/map/MapLocation";
// ... (keep your existing icon imports)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    percentage: "",
  });
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = ["BCA", "MCA", "B.TECH", "M.TECH", "BBA", "MBA", "MBBS"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = { ...formData, course: selectedCourse };
      console.log(payload);
      const response = await axios.post("/api/contact", payload, {
        // const response = await axios.post(
        //   "http://localhost:4000/api/contact",
        //   payload,
        //   {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(response.data.message);
      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        percentage: "",
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
    <div className="Register-p-cont">
      <div className="register-form-container">
        <h4 className="contact-heading">Register for counselling</h4>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="regiter-elements-content ">
            <div className="form-fill-section upper-section-form">
              <i>
                <IoPersonOutline />
              </i>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="register-input-section"
                required
              />
            </div>

            {/* Mobile Field */}
            <div className="form-fill-section upper-section-form">
              <i>
                <LuPhone />
              </i>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="register-input-section"
                required
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="form-fill-section">
            <i>
              <IoMailOutline />
            </i>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="register-input-section"
              required
            />
          </div>

          {/* Percentage Field */}
          <div className="form-fill-section">
            <i>
              <TbCirclePercentage />
            </i>

            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleInputChange}
              placeholder="Percentage"
              className="register-input-section"
              required
            />
          </div>

          {/* Course Dropdown */}
          <select
            className="course-dropdown"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option className="course-dropdown-option" value="" disabled>
              Select Course
            </option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          <div className="register-btn-container">
            <button
              className="Register-b-wrap"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>
          </div>
        </form>
      </div>

      <div class="parallax-location"></div>
      <div className="map-location-container container">
        <MapLocation />
        <div className="written-address-container">
          <h1 className="mb10">India</h1>
          <p className="map-address">
            <i className="location-icon-page">
              <FaLocationDot />
            </i>
            Plot No 926 , Tower 3 Golden I , Greater Noida West UttarPradesh
          </p>
          <h1 className="mb10">Aurtralia</h1>
          <p className="map-address aus-address">
            <i className="location-icon-page">
              <FaLocationDot />
            </i>
            36 Johnson Drive , Glen Waverley Melbourne , Victoria
          </p>
        </div>
      </div>
      {/* Keep your existing map and address components */}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Contact;
