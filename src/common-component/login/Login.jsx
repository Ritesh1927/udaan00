import React, { useState } from "react";
import "../login/Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setFormData({
      name: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      const { name, contact, email, password, confirmPassword } = formData;
      if (!name || !contact || !email || !password || !confirmPassword) {
        return alert("Please fill all fields");
      }
      if (!/^\d{10}$/.test(contact)) {
        return alert("Enter a valid 10-digit contact number");
      }
      if (password !== confirmPassword) {
        return alert("Passwords do not match");
      }
      alert("Signup successful! You can now login.");
      toggleMode();
    } else {
      if (!formData.email || !formData.password) {
        return alert("Please enter email and password");
      }
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      name: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {isLoggedIn ? (
          <>
            <h2>Welcome!</h2>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h2>{isSignup ? "Sign Up" : "Login"}</h2>
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit phone number"
                    required
                  />
                </>
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
              <span onClick={toggleMode}>
                {isSignup ? " Login" : " Sign Up"}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
