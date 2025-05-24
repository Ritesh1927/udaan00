import React, { useState } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";
import "../auth/authcss/Register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="register-main-container">
      <div className="register-form-wrapper">
        <div className="register-left">
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
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
            <Link to="/login">
              Already have an account? <span>Log In</span>
            </Link>
            <p>{message}</p>
          </form>
        </div>
        <div className="register-right" />
      </div>
    </div>
  );
}
