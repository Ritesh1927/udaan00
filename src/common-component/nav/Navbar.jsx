// src/nav/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import "../nav/Navbar.css";
import Logoimg from "../../assets/Udaan_logo2.png";
import { Link } from "react-router-dom";
import CoustomDropdown from "../../component/dropdown/CustomDropdown";
import { FiMenu, FiX } from "react-icons/fi";
import userProfile1 from "../../assets/profile1.png";
import { useAuth } from "../../auth/authContext";
import { FaChevronDown, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setMobileDropdownOpen((prev) => !prev);
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
              <Link to="/franchise" onClick={() => setMobileMenuOpen(false)}>
                Franchise
              </Link>
            </li>
          </ul>
          <div className="auth-buttons">
            {user ? (
              <Link to="/profile">
                <img className="profile-img" src={userProfile1} alt="Profile" />
              </Link>
            ) : (
              <Link to="/login" className="nav-login-btn login-btn">
                Login
              </Link>
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
            <Link to="/profile">
              <img className="profile-img" src={userProfile1} alt="Profile" />
            </Link>
          ) : (
            <Link to="/login" className="mobile-login-btn">
              Login
            </Link>
          )}
          {/* {!user && (
            <li>
              <button
                type="button"
                className="mobile-login-btn"
                onClick={() => {
                  openModal();
                  toggleMobileMenu();
                }}
              >
                <FaUser /> Login
              </button>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
