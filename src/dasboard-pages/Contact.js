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

  const courses = ["BCA", "MCA", "B.TECH", "M.TECH", "BBA", "MBA"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = { ...formData, course: selectedCourse };
      
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
          <div className="form-fill-section">
            <IoPersonOutline />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
          </div>

          {/* Mobile Field */}
          <div className="form-fill-section">
            <LuPhone />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-fill-section">
            <IoMailOutline />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>

          {/* Percentage Field */}
          <div className="form-fill-section">
            <TbCirclePercentage />
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleInputChange}
              placeholder="Percentage"
              required
            />
          </div>

          {/* Course Dropdown */}
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="" disabled>Select Course</option>
            {courses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register Now"}
          </button>
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
              36 Johnson Drive , Glen Waverley Melbourne , Victoria
            </p>
          </div>
        </div>
      {/* Keep your existing map and address components */}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
