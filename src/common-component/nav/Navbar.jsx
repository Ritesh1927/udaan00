import React, { useState, useRef, useEffect } from "react";
import "../nav/Navbar.css";
import Logoimg from "../../assets/Udaan_logo2.png";
import { Link, useNavigate } from "react-router-dom";
import CoustomDropdown from "../../component/dropdown/CustomDropdown";
import { FiMenu, FiX } from "react-icons/fi";
import userProfile from "../../assets/profile.png";
import userProfile1 from "../../assets/profile1.png";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import Login from "../../auth/Login";
import { useAuth } from "../../auth/authContext";

const Navbar = () => {
  const { user } = useAuth();
  // console.log("Navbar rendered. User:", user);
  // const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  // useEffect(() => {
  //   setIsLoggedIn(!!user);
  // }, [user]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showLogoutModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    setProfileOpen(false);
    switch (option) {
      case "Insert Profile":
        navigate("/insert-profile");
        break;
      case "Settings":
        navigate("/settings");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar-main-container">
      <div className="nav-header">
        <div className="logo-container">
          <img className="logo-img" src={Logoimg} alt="Logo" />
        </div>

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
              About us
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
              Contact us
            </Link>
          </li>
          <li>
            <Link
              className="nav-elements"
              to="/franchise"
              onClick={() => setMenuOpen(false)}
            >
              Franchise
            </Link>
          </li>
        </ul>

        {user ? (
          <Link to="/profile">
            <img className="profile-img" src={userProfile1} alt="Profile" />
          </Link>
        ) : (
          <Link to="/login" className="nav-elements login-link">
            Login
          </Link>
        )}

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {/* <div className="nav-flag-ribbon"></div> */}
    </nav>
  );
};

export default Navbar;
