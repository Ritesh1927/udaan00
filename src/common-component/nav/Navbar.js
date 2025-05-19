import React, { useState, useRef, useEffect } from "react";
import "../nav/Navbar.css";
import Logoimg from "../../assets/Udaan_logo2.png";
import { Link, useNavigate } from "react-router-dom";
import CoustomDropdown from "../../component/dropdown/CustomDropdown";
import { FiMenu, FiX } from "react-icons/fi";
import userProfile from "../../assets/profile.png";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import Logout from "../logout/Logout";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.clear();
    window.location.href = "/login"; // or use navigate('/login') if using React Router
  };
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

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
      // case "Logout":
      //   navigate("/logout");
      //   break;
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

        {/* login code -------------------------------------------------------------------- */}

        <Link to="/login" className="nav-login-btn">
          Login
        </Link>

        <div className="profile-container" ref={dropdownRef}>
          <img
            src={userProfile}
            alt="Profile"
            className="profile-img"
            onClick={toggleProfile}
          />
          {profileOpen && (
            <div className="profile-dropdown">
              <div
                className="dropdown-item"
                onClick={() => handleOptionClick("Insert Profile")}
              >
                <p className="profile-icons">
                  <i>
                    <CgProfile />
                  </i>
                </p>
                <p>Profile</p>
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleOptionClick("Settings")}
              >
                <p className="profile-icons">
                  <i>
                    <IoSettingsOutline />
                  </i>
                </p>
                <p>Settings</p>
              </div>
              <div
                className="dropdown-item"
                onClick={() => setShowLogoutModal(true)}
              >
                <p className="profile-icons">
                  <i>
                    <IoArrowUndoCircleOutline />
                  </i>
                </p>
                <p>Sign Out </p>
              </div>
            </div>
          )}
        </div>


        
        <Logout
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onLogout={handleLogout}
        />

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
