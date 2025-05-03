import React, { useState } from "react";
import "../login/Login.css";
import axios from "axios";
const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? "http://localhost:5000/api/signup"
      : "http://localhost:5000/api/login";

    if (isSignup && formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const payload = isSignup
        ? formData
        : {
            email: formData.email,
            password: formData.password,
          };
      const res = await axios.post(url, payload);
      if (!isSignup) {
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
      } else {
        alert("Signup successful!");
        toggleMode();
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p className="toggle-link">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={toggleMode}>{isSignup ? " Login" : " Sign Up"}</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
