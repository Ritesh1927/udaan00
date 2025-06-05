import React from "react";
import Logo from "../../assets/Logo3.png";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import DownloadPdf from "../download/DownloadPdf";
const Footer = () => {
  return (
    <>
      <section className="footer-main-continer">
        <div className="footer-inner-wrapper">
          <div className="footer-inner-first-section">
            <div className="footer-logo-wrapper ">
              <img src={Logo} alt="" />
            </div>
            <p className="footer-contact-msg-heading mb10">
              Divison of Udaan Eduservices
            </p>
            <p className="footer-contact-msg">
              Have enquires? Don't hesitate to drop us an email at
              info@udaan360.com, and we'll respond promptly
            </p>
          </div>
          <div className="footer-inner-second-section">
            <h2 className="Study-abroad-heading">Study Abroad</h2>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Study in UK </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Study in US </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Study in New Zealand </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Study in Australia </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Study in Canada </Link>
            </li>
          </div>
          <div className="footer-inner-second-section">
            <h2 className="Study-abroad-heading">Other Links</h2>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Scholarships </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Visa Assistance </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link to="/testimonials" className="study-links">
                Testimonials
              </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link to="/blogs" className="study-links">
                {" "}
                Blogs{" "}
              </Link>
            </li>
            <p className="Find-us-links">Find us on</p>
            <div className="social-media-links">
              <a
                className="social-link-wrap"
                href="https://www.linkedin.com/company/udaan-eduservices/"
              >
                <i className="social-links">
                  <FaLinkedin />
                </i>
              </a>

              <a
                className="social-link-wrap"
                href="https://www.instagram.com/udaan.360/?next=%2F&hl=en%5C"
              >
                <i className="social-links">
                  <FaInstagram />
                </i>
              </a>

              <i className="social-links">
                <FaSquareXTwitter />
              </i>
              <i className="social-links">
                <FaFacebook />
              </i>
            </div>
          </div>
          <div className="footer-inner-second-section">
            <h2 className="Study-abroad-heading">Contact Us</h2>

            <div className="location-section">
              <i className="location-icon">
                <FaLocationDot />
              </i>
              <p>Golden I , Greater Noida West UttarPradesh,India </p>
            </div>
            <div className="location-section">
              <i className="location-icon">
                <FaLocationDot />
              </i>
              <p>73, Tagore Colony,Chakrata Road Dehradun.248001 </p>
            </div>
            <div className="location-section">
              <i className="location-icon">
                <FaLocationDot />
              </i>
              <p className="">
                36 Johnson Drive , Glen Waverley Melbourne , Victoria ,
                Australia
              </p>
            </div>

            <div className="location-section">
              <i className="mail-icon">
                <IoIosMail />
              </i>
              <a href="mailto:info@udaan360.com">info@udaan360.com</a>
            </div>

            <div className="location-section">
              <i className="phone-icon">
                <FaPhoneAlt />
              </i>

              <a href=" tel:+917355308287"> +91 7355308287</a>
            </div>

            <div className="download-wrapper">
              <DownloadPdf />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
