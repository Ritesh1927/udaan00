import React, { useState, useRef, useEffect } from "react";
import "../../common-component/nav/Navbar";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const options = [
    { label: "Admisson", path: "/admisson" },
    { label: "Sip", path: "/sip" },
    { label: "Abroad Study ", path: "/aboradstudy" },
    { label: "Skills Migration ", path: "/skillmigration" },
  ];

  // Function to handle selection
  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
        Services
        <i className="down-icon">
          <MdOutlineArrowDropDown />
        </i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="dropdown-options-container ">
          {options.map((option) => (
            <li
              key={option.path}
              className="dropdown-option"
              onClick={() => handleSelect(option.path)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
