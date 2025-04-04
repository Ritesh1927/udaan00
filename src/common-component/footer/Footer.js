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
const Footer = () => {
  return (
    <>
      <section className="footer-main-continer">
        <div className="container footer-inner-wrapper">
          <div className="footer-inner-first-section">
            <div className="footer-logo-wrapper ">
              <img src={Logo} alt="" />
            </div>
            <p className="footer-contact-msg">
              Have inquiries? Don't hesitate to drop us an email at
              info@udaan360.com, and we'll respond promptly
            </p>
            <p className="Find-us-links">Find us on</p>
            <div className="social-media-links">
              <i className="social-links">
                <FaLinkedin />
              </i>
              <i className="social-links">
                <FaInstagram />
              </i>
              <i className="social-links">
                <FaSquareXTwitter />
              </i>
              <i className="social-links">
                <FaFacebook />
              </i>
            </div>
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
              <Link className="study-links"> Study in New Zeland </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Study in Austalia </Link>
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
              <Link className="study-links"> Testimoanials </Link>
            </li>
            <li>
              <i className="right-icons-set">
                <FaChevronRight />
              </i>
              <Link className="study-links"> Blogs </Link>
            </li>
          </div>
          <div className="footer-inner-second-section">
            <h2 className="Study-abroad-heading">Contact Us</h2>

            <div className="location-section">
              <i className="location-icon">
                <FaLocationDot />
              </i>
              <p>Golden I , Greater Noida West UttarPradesh,India </p>
            </div>
            <p className="australia-address">
              36 Johnson Drive , Glen Waverley Melbourne , Victoria , Aurtralia
            </p>

            <div className="location-section">
              <i className="mail-icon">
                <IoIosMail />
              </i>
              <Link>info@udaan360.com</Link>
            </div>

            <div className="location-section">
              <i className="phone-icon">
                <FaPhoneAlt />
              </i>
              <Link>+91 7355308287</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
