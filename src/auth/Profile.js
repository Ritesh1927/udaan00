import React, { useEffect, useState } from "react";
import { useAuth } from "./authContext";
import "../../src/auth/authcss/Profile.css";
import axios from "axios";
import { useAuthModal } from "./useAuthModal";

export default function Profile({ onClose }) {
  const { token, user: authUser, logout } = useAuth();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { closeModal } = useAuthModal();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
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
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Update failed");
    }
  };

  const handleLogout = () => {
    logout();
    // onClose();
    closeModal();
  };

  return (
    <div className="profile-modal-container">
      {/* <button className="close-button" onClick={onClose}>×</button> */}

      <h2>My Profile</h2>
      <p className="profile-subtext">Update your personal information</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} readOnly />
        </div>

        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="profile-button-group">
          <button type="submit" className="update-btn">
            Update Details
          </button>
          <button
            type="button"
            className="profile-logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </form>

      {message && <p className="profile-message">{message}</p>}
    </div>
  );
}
