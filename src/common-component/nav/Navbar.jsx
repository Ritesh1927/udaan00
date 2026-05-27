import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import "../nav/Navbar.css";
import { useAuth } from "../../auth/authContext";
import { useAuthModal } from "../../auth/useAuthModal";
import userProfile1 from "../../assets/profile1.png";
import { FaUser } from "react-icons/fa";

const Navbar = ({ isOpen, setIsOpen }) => {
  const { user } = useAuth();               // ✅ from TopNav
  const { openModal } = useAuthModal();     // ✅ from TopNav
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { label: "Admission In India", path: "/admisson" },
    { label: "SIP", path: "/sip" },
    { label: "Study Abroad", path: "/aboradstudy" },
    { label: "Skilled Migration", path: "/skillmigration" },
    { label: "Online MBA", path: "/onlineMba " },
    { label: "Franchise", path: "/franchise " },
    { label: "Settle Abroad", path: "/settleabroad" },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setServicesOpen(false);
  };

  /* ===== LOGIN / PROFILE (COPIED FROM TOPNAV) ===== */
  const handleLoginClick = () => {
    openModal("login");
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleProfileClick = () => {
    openModal("profile");
    setIsOpen(false);
    setServicesOpen(false);
  };
  /* =============================================== */

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen bg-[#12041A] text-white
          w-[80%] sm:w-[60%] md:w-[30%]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sidebar-animated-border
        `}
      >
        <div className="flex flex-col items-center h-full p-6">
          <div className="flex items-center w-full gap-3 mb-10">

            {/* ✅ LOGIN / PROFILE BUTTON (FINAL FIX) */}
            <div className="flex-1">
              {user ? (
                <button
                  className="profile-bbtn"
                  onClick={handleProfileClick}
                >
                  <img
                    className="profile-img"
                    src={userProfile1}
                    alt="Profile"
                  />
                </button>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="flex items-center justify-center flex-1 w-full gap-2 py-3 text-sm rounded-full nav-login-button"
                >
                  <FaUser />
                  Login
                </button>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="nav-close-button"
            >
              <FiX className="close-icon" />
            </button>
          </div>

          {/* Menu */}
          <ul className="space-y-6 text-2xl">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/eduvoyage"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                EduVoyage
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="w-full">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-start w-full gap-2 nav-link"
              >
                Services
                <span
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${servicesOpen ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
              >
                <div className="flex flex-col gap-3">
                  {services.map((item, index) => (
                    <p
                      key={item.path}
                      onClick={() => handleServiceClick(item.path)}
                      style={{ transitionDelay: `${index * 80}ms` }}
                      className={`cursor-pointer text-lg text-gray-300 hover:text-white 
                        transform transition-all duration-500 ease-out
                        ${servicesOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                        }`}
                    >
                      {item.label}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
