import React, { useState, useRef, useEffect } from "react";
import "../nav/Navbar.css";
import Logoimg from "../../assets/Udaan_logo2.png";
import { Link } from "react-router-dom";
import CoustomDropdown from "../../component/dropdown/CustomDropdown";
import { FiMenu, FiX } from "react-icons/fi";
import userProfile1 from "../../assets/profile1.png";
import { useAuth } from "../../auth/authContext";
import { FaUser } from "react-icons/fa";
import { useAuthModal } from "../../auth/useAuthModal";

const Navbar = () => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { openModal } = useAuthModal();

  const handleLoginClick = () => openModal("login");
  const handleRegisterClick = () => openModal("register");

  const handleProfileClick = () => {
    openModal("profile");
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setMobileDropdownOpen((prev) => !prev);
  };

  const handleMobileLogin = () => {
    openModal("login");
    setMobileMenuOpen(false);
  };

  const handleMobileRegister = () => {
    openModal("register");
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <img src={Logoimg} alt="Udaan 360 Logo" />
        </div>
        <div className="student-count">
          <div className="number">25,000+</div>
          <div className="text">Students Successfully Counseled</div>
        </div>
        <div className="nav-menu">
          <ul className="menu-items">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About us
              </Link>
            </li>
            <li>
              <CoustomDropdown />
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/eduvoyage" onClick={() => setMobileMenuOpen(false)}>
                EduVoyage
              </Link>
            </li>
          </ul>
          <div className="auth-buttons">
            {user ? (
              <button className="profile-bbtn" onClick={handleProfileClick}>
                <img
                  className="profile-img"
                  src={userProfile1}
                  alt="Profile"
                />
              </button>
            ) : (
              <button
                className="nav-login-btn login-btn"
                onClick={handleLoginClick}
              >
                <i><FaUser /></i>
                Login
              </button>
              // <button
              //   className="nav-register-btn register-btn"
              //   onClick={handleRegisterClick}
              // >
              //   Register
              // </button>
            )}
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-items">
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </li>
          <li>
            <CoustomDropdown />
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/franchise" onClick={toggleMobileMenu}>
              Franchise
            </Link>
          </li>
          {user ? (
            <li>
              <button className="profile-bbtn" onClick={handleProfileClick}>
                <img
                  className="profile-img"
                  src={userProfile1}
                  alt="Profile"
                />
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  className="mobile-login-btn "
                  onClick={handleMobileLogin}
                >
                  <FaUser /> Login
                </button>
              </li>
              {/* <li>
                <button
                  className="mobile-register-btn"
                  onClick={handleMobileRegister}
                >
                  Register
                </button>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
