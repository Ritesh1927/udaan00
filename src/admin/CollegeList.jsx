import React, { Fragment, useState, useEffect } from "react";
import "../admin/Admin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState([]);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("/api/admin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  const handleSub = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const collegeData = Object.fromEntries(formData.entries());

    await fetch("/api/college/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(collegeData),
    });

    alert("College Added Successfully!");
    e.target.reset();
  };

  ///////------------ Blog Management ------------////////

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const blogData = Object.fromEntries(formData.entries());

    await fetch("/api/blog/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });

    e.target.reset();
    fetchBlogs();
  };

  const fetchBlogs = async () => {
    const response = await fetch("/api/blog/list");
    const data = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return isAuthenticated ? (
    <Fragment>
      <div className="admin-panel container">
        <h1 className="text-center">Welcome to Admin Panel</h1>
        <br />
        <div className="admin-panel-btns">
          <button
            className="button-admin"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </button>
          <Link to="/college-list">
            <button className="button-admin">Go to College List</button>
          </Link>
        </div>

        <div className="admin-panel-form">
          <h1>College Management</h1>
          <br />
          <form onSubmit={handleSub} className="college-form">
            <input type="number" name="nirf" placeholder="NIRF Rank" required />
            <input
              type="text"
              name="collegeName"
              placeholder="College Name"
              required
            />
            <input type="text" name="address" placeholder="Address" required />
            <input
              type="text"
              name="accreditation"
              placeholder="Accreditation"
              required
            />
            <input type="text" name="fees" placeholder="Fees" required />
            <input
              type="text"
              name="exams"
              placeholder="Exams Required"
              required
            />
            <input
              type="text"
              name="avgPackage"
              placeholder="Average Package"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              required
            />
            <input type="text" name="rating" placeholder="Rating" required />
            <select name="category" required>
              <option value="Medical">Medical</option>
              <option value="Management">Management</option>
              <option value="Engineering">Engineering</option>
            </select>
            <button type="submit">Add College</button>
          </form>
        </div>

        {/* blogs add container */}
        <div className="blogs-add-container">
          <h2>Add Blog</h2>
          <form onSubmit={handleBlogSubmit}>
            <input type="text" name="title" placeholder="Title" required />
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="text"
              name="coursename"
              placeholder="Course Name"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              required
            ></textarea>
            <input type="text" name="image" placeholder="Image URL" required />
            <button type="submit">Add Blog</button>
          </form>
        </div>

        {/* blogs display container */}
        <div className="blogs-display-container">
          <h2>Blogs</h2>
          {blogs.map((blog) => (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.name}</p>
              <p>{blog.coursename}</p>
              <p>{blog.description}</p>
              <img src={blog.image} alt={blog.title} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  ) : (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="login-left">
          <h2>Welcome To Admin Panel</h2>
          <p className="welcome">Login For Check Web Details </p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Email" required />
            <div className="poswrod-admin-wrapper">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="poswrod-admin"
              />
              <span onClick={togglePassword} className="toggle-password-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
        <div className="login-right">
          <img
            src="https://images.unsplash.com/photo-1531496651551-427d8319623e"
            alt="admin"
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
