import React, { useState } from "react";
import "../nav/Navbar.css";
import Logoimg from "../../assets/Udaan_logo2.png";
import { Link } from "react-router-dom";
import CoustomDropdown from "../../component/dropdown/CustomDropdown";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-main-container">
      <div className="nav-header">
        <div className="logo-container">
          <img className="logo-img" src={Logoimg} alt="Logo" />
        </div>

        {/* Hamburger Menu Button (Visible only on mobile) */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-elements-container ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              className="nav-elements"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-elements"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <CoustomDropdown />
          </li>
          <li>
            <Link
              className="nav-elements"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
