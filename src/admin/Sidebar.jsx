import React from "react";
import "./Sidebaar.css"

import {
  FaPlus,
  FaList,
  FaPlusSquare,
  FaListAlt,
  FaAddressBook,
  FaBuilding,
  FaUser,
  FaSignOutAlt,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";

export default function Sidebar({ isCollapsed, setIsCollapsed, setActiveSection, setIsAuthenticated }) {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-inner">
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
        <button onClick={() => setActiveSection("collegeAdd")}>
          <FaPlus /> {!isCollapsed && "College Add"}
        </button>
        <button onClick={() => setActiveSection("collegeList")}>
          <FaList /> {!isCollapsed && "College List"}
        </button>
        <button onClick={() => setActiveSection("blogAdd")}>
          <FaPlusSquare /> {!isCollapsed && "Blog Add"}
        </button>
        <button onClick={() => setActiveSection("blogList")}>
          <FaListAlt /> {!isCollapsed && "Blog List"}
        </button>
        <button onClick={() => setActiveSection("contactList")}>
          <FaAddressBook /> {!isCollapsed && "Contact List"}
        </button>
        <button onClick={() => setActiveSection("franchiseList")}>
          <FaBuilding /> {!isCollapsed && "Franchise Data"}
        </button>
        <button onClick={() => setActiveSection("UserList")}>
          <FaUser /> {!isCollapsed && "User Data"}
        </button>
      </div>

      <div className="logout-admin-wrapper">
        <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>
          <FaSignOutAlt /> {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
}
