import React, { Fragment, useState, useEffect } from "react";
import "../admin/Admin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editCollege, setEditCollege] = useState(null);

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

  const [colleges, setColleges] = useState([]);

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
    fetchColleges();
  };

  const fetchColleges = async () => {
    const response = await fetch("/api/college/list");
    const data = await response.json();
    setColleges(data);
  };

  const handleUpdate = (college) => {
    setEditCollege(college);
    setModalOpen(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    await fetch(`/api/college/update/${editCollege._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    setModalOpen(false);
    setEditCollege(null);
    fetchColleges();
    alert("College Updated Successfully!");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this college?"))
      return;

    await fetch(`/api/college/delete/${id}`, { method: "DELETE" });

    alert("College Deleted Successfully!");
    fetchColleges();
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  return isAuthenticated ? (
    <Fragment>
      <div className="admin-panel container">
        <h1 className="text-center">Welcome to Admin Panel</h1>
        <br />
        <button
          className="button-admin"
          onClick={() => setIsAuthenticated(false)}
        >
          Logout
        </button>

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
              placeholder="Cloudinary Image URL"
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

          <br />
          <h2> college data</h2>
          <br />
          <div>
            {colleges.map((college) => (
              <div key={college._id}>
                <div className="admin-clg-info-wrapper">
                  <div className="admin-clg-img">
                    <img
                      src={college.imageUrl}
                      alt={college.collegeName}
                      width="100"
                    />
                  </div>
                  <div className="admin-clg-info">
                    <div>
                      <h1 className="text-center">{college.collegeName}</h1>
                      <div className="inline-start name-clg-category-section">
                        <div>
                          {" "}
                          <span className="admin-num-heading">nirf -</span>{" "}
                          {college.nirf}
                        </div>
                        <div>{college.category} college </div>
                      </div>
                      <div className="inline-start name-clg-category-section">
                        <div>
                          {" "}
                          <span className="admin-num-heading">
                            Address -
                          </span>{" "}
                          {college.address}
                        </div>
                        <div>
                          {" "}
                          <span className="admin-num-heading">
                            {" "}
                            Avg Package -
                          </span>
                          {college.avgPackage}
                        </div>
                      </div>
                      <div>
                        {" "}
                        <span className="admin-num-heading">Fees -</span>{" "}
                        {college.fees}
                      </div>
                      <div>
                        {" "}
                        <span className="admin-num-heading">
                          Accredation -
                        </span>{" "}
                        {college.accreditation}
                      </div>
                      <div>
                        {" "}
                        <span className="admin-num-heading">
                          Ratings -
                        </span>{" "}
                        {college.rating}
                      </div>
                      <div> {college.description}</div>
                      <div className="update-btn-wraper">
                        <button
                          className="button-admin-1"
                          onClick={() => handleUpdate(college)}
                        >
                          Update
                        </button>
                        <button
                          className="button-admin-1"
                          onClick={() => handleDelete(college._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit College</h2>
            <form onSubmit={handleModalSubmit} className="college-form">
              <input
                name="collegeName"
                placeholder="college name"
                defaultValue={editCollege.collegeName}
                required
              />
              <input
                name="address"
                placeholder="address"
                defaultValue={editCollege.address}
                required
              />
              <input
                name="accreditation"
                placeholder="accreditation"
                defaultValue={editCollege.accreditation}
                required
              />
              <input
                name="nirf"
                placeholder="nirf ranking"
                defaultValue={editCollege.nirf}
                required
              />
              <input
                name="fees"
                placeholder="college fees"
                defaultValue={editCollege.fees}
                required
              />
              <input
                name="exams"
                placeholder="Entrance Exam"
                defaultValue={editCollege.exams}
                required
              />
              <input
                name="avgPackage"
                placeholder="Average Package "
                defaultValue={editCollege.avgPackage}
                required
              />
              <input
                name="description"
                placeholder="Description"
                defaultValue={editCollege.description}
                required
              />
              <input
                name="imageUrl"
                placeholder="Image-url"
                defaultValue={editCollege.imageUrl}
                required
              />
              <input
                placeholder="ratings"
                name="rating"
                defaultValue={editCollege.rating}
                required
              />
              <select
                name="category"
                defaultValue={editCollege.category}
                required
              >
                <option value="Medical">Medical</option>
                <option value="Management">Management</option>
                <option value="Engineering">Engineering</option>
              </select>
              <button type="submit">Save</button>
              <button
                className="admoin-edit-under"
                type="button"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
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
  );
};

export default Admin;
