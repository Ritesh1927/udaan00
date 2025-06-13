import React from "react";
import "./Footer.css";
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
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          {/* <!-- Universities Section --> */}
          <div className="universities-section">
            <h3 className="universities-heading">
              Top Universities to Study Abroad
            </h3>

            {/* <!-- Country Tabs --> */}
            <div className="country-tabs">
              <button className="country-tab active">United Kingdom</button>
              <button className="country-tab">USA</button>
              <button className="country-tab">Germany</button>
              <button className="country-tab">Canada</button>
              <button className="country-tab">Australia</button>
            </div>

            {/* <!-- Universities Grid --> */}
            <div className="universities-grid" id="universitiesGrid">
              {/* <!-- UK Universities (default) --> */}
              <div className="university-card-footer" data-country="uk">
                <div className="university-info">
                  <h4 className="university-name">University of Birmingham</h4>
                  <p className="university-location">
                    Birmingham, United Kingdom
                  </p>
                  <span className="course-count">497+ Courses</span>
                </div>
              </div>

              <div className="university-card-footer" data-country="uk">
                <div className="university-info">
                  <h4 className="university-name">Coventry University</h4>
                  <p className="university-location">
                    Priory Street, Coventry, United Kingdom
                  </p>
                  <span className="course-count">519+ Courses</span>
                </div>
              </div>

              <div className="university-card-footer" data-country="uk">
                <div className="university-info">
                  <h4 className="university-name">University of Greenwich</h4>
                  <p className="university-location">London, United Kingdom</p>
                  <span className="course-count">450+ Courses</span>
                </div>
              </div>

              <div className="university-card-footer" data-country="uk">
                <div className="university-info">
                  <h4 className="university-name">Middlesex University</h4>
                  <p className="university-location">
                    Hendon, London, United Kingdom
                  </p>
                  <span className="course-count">503+ Courses</span>
                </div>
              </div>

              <div className="university-card-footer" data-country="uk">
                <div className="university-info">
                  <h4 className="university-name">Heriot Watt University</h4>
                  <p className="university-location">
                    Riccarton, Edinburgh, United Kingdom
                  </p>
                  <span className="course-count">335+ Courses</span>
                </div>
              </div>

              <div className="university-card-footer" data-country="uk">
                <div className="university-info">
                  <h4 className="university-name">Aston University</h4>
                  <p className="university-location">
                    Birmingham, United Kingdom
                  </p>
                  <span className="course-count">373+ Courses</span>
                </div>
              </div>

              {/* <!-- USA Universities --> */}
              <div
                className="university-card"
                data-country="usa"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">
                    Florida International University
                  </h4>
                  <p className="university-location">Miami, United States</p>
                  <span className="course-count">379+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="usa"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">Auburn University</h4>
                  <p className="university-location">Auburn, United States</p>
                  <span className="course-count">451+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="usa"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">Roosevelt University</h4>
                  <p className="university-location">Chicago, United States</p>
                  <span className="course-count">385+ Courses</span>
                </div>
              </div>

              {/* <!-- Germany Universities --> */}
              <div
                className="university-card"
                data-country="germany"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">
                    The Ludwig Maximilian University of Munich
                  </h4>
                  <p className="university-location">Bavaria, Germany</p>
                  <span className="course-count">425+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="germany"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">Heidelberg University</h4>
                  <p className="university-location">
                    Baden-Württemberg, Germany
                  </p>
                  <span className="course-count">378+ Courses</span>
                </div>
              </div>

              {/* <!-- Canada Universities --> */}
              <div
                className="university-card"
                data-country="canada"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">University Canada West</h4>
                  <p className="university-location">
                    Granville Street, Vancouver, Canada
                  </p>
                  <span className="course-count">457+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="canada"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">Great Plains College</h4>
                  <p className="university-location">
                    Swift Current, SK, Canada
                  </p>
                  <span className="course-count">366+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="canada"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">Parkland College</h4>
                  <p className="university-location">
                    Sprystai Way, Yorkton, Canada
                  </p>
                  <span className="course-count">366+ Courses</span>
                </div>
              </div>

              {/* <!-- Australia Universities --> */}
              <div
                className="university-card"
                data-country="australia"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">
                    Parklands Christian College
                  </h4>
                  <p className="university-location">
                    Park Ridge QLD, Australia
                  </p>
                  <span className="course-count">366+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="australia"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">
                    The University of Melbourne
                  </h4>
                  <p className="university-location">
                    Grattan Street Parkville, Victoria Australia
                  </p>
                  <span className="course-count">411+ Courses</span>
                </div>
              </div>

              <div
                className="university-card"
                data-country="australia"
                style={{ display: "none" }}
              >
                <div className="university-info">
                  <h4 className="university-name">Monash University</h4>
                  <p className="university-location">Victoria, Australia</p>
                  <span className="course-count">411+ Courses</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Main Footer Content --> */}
          <div className="footer-main">
            {/* <!-- Left Column - Categories --> */}
            <div className="footer-column categories-column">
              <h3 className="footer-heading">Enroll Now For Admissions</h3>
              <div className="category-buttons">
                <button className="category-btn btech-btn">
                  <i className="fas fa-cogs">
                    <FaCogs />
                  </i>
                  B.Tech
                </button>
                <button className="category-btn medical-btn">
                  <i className="fas fa-stethoscope">
                    <FaStethoscope />
                  </i>
                  Medical
                </button>
                <button className="category-btn management-btn">
                  <i className="fas fa-chart-line">
                    <FaChartLine />
                  </i>
                  Management
                </button>
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
                  <a href="#scholarships">Scholarships</a>
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
              <h4>Division of Udaan Eduservices</h4>
              <p>
                Have enquiries? Don't hesitate to drop us an email at{" "}
                <a href="mailto:info@udaan360.com">info@udaan360.com</a>, and
                we'll respond promptly
              </p>
            </div>

            <div className="footer-social">
              <h4>Find us on</h4>
              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a>
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
                  className="social-link youtube"
                >
                  <i className="fab fa-youtube">
                    <FaYoutube />
                  </i>
                </a>
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
