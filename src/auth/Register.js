import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthModal } from "./useAuthModal"; 
import { useAuth } from "./authContext";
import "../../src/auth/authcss/Register.css";

export default function Register({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { switchTab } = useAuthModal(); // Get modal navigation methods
  const { login } = useAuth();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", form);
      setMessage(res.data.message);
      
      // Optional: Auto-login after registration
      if (res.data.token) {
        login(res.data.user, res.data.token);
        onClose(); // Close modal after successful registration
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="register-modal-container">
      <h2>Sign Up</h2>
      <p>Create your account to get started</p>
      
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          type="text"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        
        <div className="password-input-wrapper">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <span onClick={togglePassword} className="password-toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Register</button>
        
        <div className="auth-switch-text">
          Already have an account?{" "}
          <button 
            type="button" 
            className="text-link"
            onClick={() => switchTab('login')}
          >
            Log In
          </button>
        </div>
        
        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
}