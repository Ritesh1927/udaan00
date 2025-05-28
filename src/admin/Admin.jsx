import React, { Fragment, useState, useEffect } from "react";
import "../admin/Admin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
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

  //  ----------------- Admin Panel -----------------

  const [colleges, setColleges] = useState([]);

  const handleSub = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const collegeData = Object.fromEntries(formData.entries());

    // ----- Add college --------

    await fetch("/api/college/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(collegeData),
    });

    alert("College Added Successfully!");
    e.target.reset();
    fetchColleges();
  };

  //--------- college list  ------
  const fetchColleges = async () => {
    const response = await fetch("/api/college/list");
    const data = await response.json();
    setColleges(data);
  };

  //--------- upadte college-----------

  const handleUpdate = async (id) => {
    const updatedData = {
      collegeName: prompt("Enter new college name"),
      category: prompt("Enter new category (Medical, Management, Engineering)"),
      nirf: prompt("Enter new NIRF Rank", ""),
      avgPackage: prompt("Enter new Average Package", ""),
      rating: prompt("Enter new rank"),
      description: prompt("Enter new Description", ""),
    };

    await fetch(`/api/college/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    alert("College Updated Successfully!");
    fetchColleges(); // Refresh list
  };

  // --------- delete college -----------

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this college?"))
      return;

    await fetch(`/api/college/delete/${id}`, { method: "DELETE" });

    alert("College Deleted Successfully!");
    fetchColleges(); // Refresh list
  };

  // ----------- list of colleges functions -----------------------
  useEffect(() => {
    fetchColleges();
  }, []);

  //----------------------------------------------------------

  return isAuthenticated ? (
    <Fragment>
      <div className="admin-panel">
        <h1>Welcome to Admin Panel</h1>
        ------------------------------------------------------------------------------
        <div className="admin-panel-form">
          <h1>College Management</h1>
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
              placeholder="Cloudinary Image URL"
              required
            />
            <input type="text" name="rating" placeholder="Rating" required />

            {/* Category Dropdown */}
            <select name="category" required>
              <option value="Medical">Medical</option>
              <option value="Management">Management</option>
              <option value="Engineering">Engineering</option>
            </select>

            <button type="submit">Add College</button>
          </form>
          {/* 
          <h2>College List</h2>
          <ul>
            {colleges.map((college) => (
              <li key={college._id}>
                {college.collegeName} - {college.nirf} -
                {college.avgPackage} - {college.description} - {college.category} 
              </li>
            ))}
          </ul> */}
          <h2> college data</h2>
          <ul>
            {colleges.map((college) => (
              <li key={college._id}>
                <img
                  src={college.imageUrl}
                  alt={college.collegeName}
                  width="100"
                />
                {college.nirf}- {college.collegeName} - {college.category} -{" "}
                {college.address}-{college.avgPackage} - {college.fees}-
                {college.accreditation}-{college.rating}
                {college.description}-{" "}
                <button onClick={() => handleUpdate(college._id)}>
                  Update
                </button>{" "}
                <button onClick={() => handleDelete(college._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {/* <h2>Delete college</h2>
          <ul>
            {colleges.map((college) => (
              <li key={college._id}>
                {college.collegeName} - {college.category}
                <button onClick={() => handleDelete(college._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul> */}
          -----------------------------------------------------------------------------------
        </div>
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      </div>
    </Fragment>
  ) : (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="login-left">
          <h2>Welcome To Admin Pannel </h2>
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
          <img src="https://images.unsplash.com/photo-1531496651551-427d8319623e" />
        </div>
      </div>
    </div>
    // <div className="login-form">
    //   <h2>Admin Login</h2>
    //   {error && <p className="error">{error}</p>}

    //   <form onSubmit={handleSubmit}>
    //     <input name="username" placeholder="Username" required />
    //     <input
    //       name="password"
    //       type="password"
    //       placeholder="Password"
    //       required
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default Admin;
