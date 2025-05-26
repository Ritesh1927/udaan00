import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";
import "../../src/auth/authcss/Profile.css";
import axios from "axios";

export default function Profile() {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user details from backend
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = res.data.user;
        setName(userData.name || "");
        setMobile(userData.mobile || "");
        setEmail(userData.email || "");
      } catch (err) {
        console.error("Failed to load profile", err);
        setMessage("Failed to load profile");
      }
    };

    if (token) fetchUserProfile();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "/api/auth/update-profile",
        { name, mobile },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Update failed");
    }
  };

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Optional: Redirect to login after logout
  };

  return (
    <div className="profile-main-container">
      <div className="profile-card">
        <h2>My Profile</h2>
        <p className="profile-subtext">Update your personal information</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {" "}
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} readOnly />
          </div>
          <div className="input-group">
            <label>Mobile: </label>
            <input
              type="text"
              value={mobile}
              placeholder="Enter mobile number"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="btn-btn-logout-group">
            <button type="submit" className="update-btn">
              Update Details
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </form>
        {message && <p className="profile-message">{message}</p>}
      </div>
    </div>
  );
}
