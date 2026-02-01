import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Homesvg from "../../assets/homedown.svg"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCogs,
  FaStethoscope,
  FaChartLine,
} from "react-icons/fa";
// import {  } from "react-icons/fa";
import DownloadPdf from "../download/DownloadPdf";
// import FooterUniversity from "../footeruniversity/FooterUniversity";
const Footer = () => {
  return (
    <>
      <img src={Homesvg} className="footer-divider" />
      <footer className="footer-section ">
        <div className="footer-container">
          {/* <!-- Universities Section --> */}
          {/* <FooterUniversity /> */}
          {/* <!-- Main Footer Content --> */}
          <div className="footer-main">
            {/* <!-- Left Column - Categories --> */}
            <div className="footer-column categories-column">
              <h3 className="footer-heading">Enroll Now For Admissions</h3>
              <div className="category-buttons">
                <button
                  className="category-btn btech-btn"
                  onClick={() => (window.location.href = "/admisson?tab=btech")}
                >
                  <i className="fas fa-cogs">
                    <FaCogs />
                  </i>
                  B.Tech
                </button>

                <button
                  className="category-btn medical-btn"
                  onClick={() =>
                    (window.location.href = "/admisson?tab=medical")
                  }
                >
                  <i className="fas fa-stethoscope">
                    <FaStethoscope />
                  </i>
                  Medical
                </button>

                <button
                  className="category-btn management-btn"
                  onClick={() =>
                    (window.location.href = "/admisson?tab=management")
                  }
                >
                  <i className="fas fa-chart-line">
                    <FaChartLine />
                  </i>
                  Management
                </button>
              </div>
              {/* franchise secition */}
              <div className="footer-column study-abroad-column mt20">
                <h3 className="footer-heading">Franchise</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/dehradun">Dehradun</Link>
                  </li>


                </ul>
              </div>
            </div>


            {/* <!-- Middle Column - Study Abroad --> */}
            <div className="footer-column study-abroad-column">
              <h3 className="footer-heading">Study Abroad</h3>
              <ul className="footer-links">
                <li>
                  <a href="#study-uk">Study in UK</a>
                </li>
                <li>
                  <a href="#study-us">Study in US</a>
                </li>
                <li>
                  <a href="#study-nz">Study in New Zealand</a>
                </li>
                <li>
                  <a href="#study-australia">Study in Australia</a>
                </li>
                <li>
                  <a href="#study-canada">Study in Canada</a>
                </li>
              </ul>
            </div>

            {/* <!-- Right Column - Other Links --> */}
            <div className="footer-column other-links-column">
              <h3 className="footer-heading">Other Links</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#scholarships">Scholarships</Link>
                </li>
                <li>
                  <a href="#visa-assistance">Visa Assistance</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#blogs">Carrer</a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Column --> */}
            <div className="footer-column contact-column">
              <h3 className="footer-heading">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt">
                    <FaMapMarkerAlt />
                  </i>
                  <span>Golden I, Greater Noida West Uttar Pradesh, India</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt">
                    <FaMapMarkerAlt />
                  </i>
                  <span>73, Tagore Colony, Chakrata Road Dehradun. 248001</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt">
                    <FaMapMarkerAlt />
                  </i>
                  <span>
                    36 Johnson Drive, Glen Waverley Melbourne, Victoria,
                    Australia
                  </span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope">
                    <FaEnvelope />
                  </i>
                  <a href="mailto:info@udaan360.com">info@udaan360.com</a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone">
                    <FaPhone />
                  </i>
                  <a href="tel:+917355308287">+91 7355308287</a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div className="footer-bottom">
            <div className="footer-brand">
              <h4> Uudaan360 Edutech PVT LTD</h4>
              <p>
                Have enquiries? Don't hesitate to drop us an email at{" "}
                <a href="mailto:info@udaan360.com">info@udaan360.com</a>, and
                we'll respond promptly
              </p>
            </div>

            <div className="footer-social">
              <h4>Find us on</h4>
              <div className="social-links">
                <a
                  href="https://facebook.com/udaancareertalks"
                  className="social-link facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>

                {/* <a href="#" className="social-link facebook">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a> */}
                <a
                  href="https://www.instagram.com/udaan.360/?next=%2F&hl=en%5C"
                  className="social-link instagram"
                >
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/company/udaan-eduservices/"
                  className="social-link linkedin"
                >
                  <i className="fab fa-linkedin-in">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="https://youtube.com/@udaancareertalks?si=DmvAaioIicfSKlbv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube"
                >
                  <i className="fab fa-youtube">
                    <FaYoutube />
                  </i>
                </a>
                {/* <a
                  href="https://youtube.com/@udaancareertalks?si=DmvAaioIicfSKlbv"
                  target="_blank"
                  className="social-link youtube"
                >
                  <i className="fab fa-youtube">
                    <FaYoutube />
                  </i>
                </a> */}
              </div>
            </div>

            <div className="footer-download">
              <DownloadPdf />
            </div>
          </div>

          {/* <!-- Copyright --> */}
          <div className="footer-copyright">
            <p>&copy; 2025 Udaan360.com, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
