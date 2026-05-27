import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // ✅ Fix added here
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    // appearedInExam: "no",
    // examName: "",
    // examPercentage: "",
  });
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  // const courses = ["BCA", "MCA", "B.TECH", "M.TECH", "BBA", "MBA", "MBBS"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting to:", `${window.location.origin}/api/franchise`);

    try {
      const payload = { ...formData, course: selectedCourse };
      if (formData.appearedInExam === "no") {
        delete payload.examName;
        delete payload.examPercentage;
      }
      const response = await axios.post("/api/contact", payload, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(response.data.message || "Form submitted successfully!");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          query: "",
          // appearedInExam: "no",
          // examName: "",
          // examPercentage: "",
        });
        setSelectedCourse("");
      }, 200);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Submission failed";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="contact-us-main-inner-section">
        <div className="contact-us-main-section">
          <div className="contact-page-header">
            <h2>Contact Us</h2>
            <p>Ready to start your educational journey? Get in touch with us for personalized counselling and guidance.</p>
          </div>

          <div className="contact-page-grid">
            <div className="contact-page-form-container">
              <h3 className="contact-page-form-title">Get A Callback </h3>

              <form onSubmit={handleSubmit}>
                <div className="contact-page-form-row">
                  <div className="contact-page-form-group">
                    <label for="firstName">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="contact-page-form-group">
                    <label for="lastName">Phone Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("mobile")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Phone Number "
                      required
                    />
                  </div>
                </div>
                <div class="contact-page-form">
                  <div className="contact-page-form-group">
                    <label for="email">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Email Address "
                      required
                    />
                  </div>
                  <div className="contact-page-form-group">
                    <label >Your Query *</label>
                    <input
                      type="text"
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("query")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Write your Query "
                      required
                    />
                  </div>
                </div>
                {/* <div className="contact-page-form-group">
                  <label for="email">Select Course *</label>
                  <select
                    className={`course-dropdown ${focusedField === "dropdown" ? "focused" : ""}`}
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    onFocus={() => setFocusedField("dropdown")}
                    onBlur={() => setFocusedField("")}
                    required
                    name="dropdown"
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
                </div> */}
                {/* <div className="contact-page-form-group">
                  <label>Did you appear in any competitive exam? *</label>
                  <div className="contact-page-radio-group">
                    <label className="contact-page-radio-option" for="examYes">
                      <input
                        type="radio"
                        name="appearedInExam"
                        value="yes"
                        checked={formData.appearedInExam === "yes"}
                        onChange={handleInputChange}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="contact-page-radio-option" for="examNo">
                      <input
                        type="radio"
                        name="appearedInExam"
                        value="no"
                        checked={formData.appearedInExam === "no"}
                        onChange={handleInputChange}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div> */}

                {/* {formData.appearedInExam === "yes" && (
                  <div className="contact-page-form-row">
                    <div className="contact-page-form-group">
                      <label>Exam Name *</label>
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
                    <div className="contact-page-form-group">
                      <label>Exam Percentile *</label>
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
                )} */}

                <div className="register-btn-container">
                  <button
                    className=" contact-page-submit-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Register Now"}
                  </button>
                </div>
              </form>
            </div>

            <div className="contact-page-info">
              <div className="contact-page-info-card">
                <h3>Our Locations</h3>

                <div className="contact-page-location-item">
                  <div className="contact-page-location-flag contact-page-india-flag"></div>
                  <div className="contact-page-location-details">
                    <h4>Greater Noida, India</h4>
                    <p>Plot No 926, Tower 3 Golden I<br />Greater Noida West, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="contact-page-location-item">
                  <div className="contact-page-location-flag contact-page-india-flag"></div>
                  <div className="contact-page-location-details">
                    <h4>Dehradun, India</h4>
                    <p>73, Tagore Colony, Chakrata Road<br />Dehradun - 248001</p>
                  </div>
                </div>

                <div className="contact-page-location-item">
                  <div className="contact-page-location-flag contact-page-australia-flag">🇦🇺</div>
                  <div class="contact-page-location-details">
                    <h4>Melbourne, Australia</h4>
                    <p>36 Johnson Drive, Glen Waverley<br />Melbourne, Victoria</p>
                  </div>
                </div>
              </div>

              <div className="contact-page-info-card">
                <h3>Get in Touch</h3>
                <div className="contact-page-details">
                  <a
                    href="tel:+917355308287"
                    className="contact-page-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="contact-page-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-page-text">
                      <div className="contact-page-label">Call Us</div>
                      <div className="contact-page-value">+91 7355308287</div>
                    </div>
                  </a>

                  <div className="contact-page-item">
                    <div className="contact-page-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-page-text">
                      <div className="contact-page-label">Email</div>
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=info@udaan360.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-page-value"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        info@udaan360.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-page-item">
                    <div className="contact-page-icon">
                      <FaClock />
                    </div>
                    <div className="contact-page-text">
                      <div className="contact-page-label">Hours</div>
                      <div className="contact-page-value">Mon-Sat 9AM-6PM</div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/917355308287?text=How%20can%20I%20help%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="contact-page-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="contact-page-text">
                      <div className="contact-page-label">WhatsApp</div>
                      <div className="contact-page-value">+91 7355308287</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-page-map-section">
            <div className="contact-page-map-header">
              <h3>
                <FaMapMarkerAlt style={{ marginRight: '10px', color: '#7b4397' }} />
                Find Us - Greater Noida Location
              </h3>
            </div>

            <iframe
              className="contact-page-map-frame"
              title="Udaan360 Location - Greater Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.4331528!3d28.5905187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef278150b6a3%3A0xb31dab11c34105dc!2sUdaan360!5e0!3m2!1sen!2sin!4v1638360000000"
              allowFullScreen
              loading="lazy"
              style={{ border: 0, width: '100%', height: '400px' }}
            ></iframe>
          </div>


        </div>
      </div>
      {/* ✅ ToastContainer inserted correctly */}
      <ToastContainer ClassName="my-toast-container" position="top-right" />
    </>
  );
};

export default Contact;
