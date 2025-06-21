import React, { Fragment, useState, useEffect } from "react";
import "../admin/Admin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ContactList from "./ContactList";
import FranchiseList from "./FranchiseList";
import UserList from "./UserList";



const Admin = () => {

  const [activeSection, setActiveSection] = useState("collegeAdd");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editCollege, setEditCollege] = useState(null);

  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});



  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleReadMore = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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

  /// college functanality ------------------

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
    setFilter(data);
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

  // ------ search functionality ------

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilter(colleges);
  };

  const click = () => {
    if (searchTerm === "") {
      setFilter([]);
    } else {
      const filtered = colleges.filter(
        (item) =>
          item.collegeName.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm)
      );
      setFilter(filtered);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  // -------- blog functionality ------

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

  const handleUpdateBlog = (blog) => {
    setEditCollege(blog);
    setModalOpen(true);
  };

  const handleModalBlogSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    await fetch(`/api/blog/update/${editCollege._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    setModalOpen(false);
    setEditCollege(null);
    fetchBlogs();
    alert("Blog Updated Successfully!");
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    await fetch(`/api/blog/delete/${id}`, { method: "DELETE" });

    fetchBlogs();
  };

 

  useEffect(() => {
    fetchColleges();
    fetchBlogs();
  }, []);

  return isAuthenticated ? (
    <Fragment>
      <div className="admin-dashboard-container">
        <div className="admin-panel ">
          <div className="sidebar">
            <div className="sidebar-inner">
              <button onClick={() => setActiveSection("collegeAdd")}>
                College Add
              </button>
              <button onClick={() => setActiveSection("collegeList")}>
                College List
              </button>
              <button onClick={() => setActiveSection("blogAdd")}>
                Blog Add
              </button>
              <button onClick={() => setActiveSection("blogList")}>
                Blog List
              </button>
              <button onClick={() => setActiveSection("contactList")}>
                Contact List
              </button>
              <button onClick={() => setActiveSection("franchiseList")}>
                franchise data
              </button>
              <button onClick={() => setActiveSection("UserList")}>
                 user data
              </button>
            </div>
            <div className="logout-admin-wrapper">
              <button
                className="logout-btn"
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </button>

              
            </div>
          </div>
          <div className="admin-panel-content">
            <h1 className="text-center">Welcome to Admin Panel</h1>
            <br />
            {/* <button
              className="button-admin logout-button-sidebar"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </button> */}
             {activeSection === "contactList" && (
               <ContactList/>
             )
             }
             {activeSection === "franchiseList" && (
               <FranchiseList/>
             )
             }
             {activeSection === "UserList" && (
               <UserList/>
             )
             }

            {activeSection === "collegeAdd" && (
              <div className="admin-panel-form">
                <h1>College Management</h1>
                <br />
                <form onSubmit={handleSub} className="college-form">
                  <input
                    type="number"
                    name="nirf"
                    placeholder="NIRF Rank"
                    required
                  />
                  <input
                    type="text"
                    name="collegeName"
                    placeholder="College Name"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                  />
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
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    required
                  />
                  <select name="category" required>
                    <option value="Medical">Medical</option>
                    <option value="Management">Management</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                  <button type="submit">Add College</button>
                </form>
              </div>
            )}

            {activeSection === "collegeList" && (
              <div>
                <br />
                <h2>College Data</h2>
                <br />
                <div className="search-product">
                  <input
                    type="text"
                    className="product-search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button className="search-button" onClick={click}>
                    Search
                  </button>
                </div>
                <div className="college-admin-list-wrapper">
                  {filter.length > 0
                    ? filter.map((college) => (
                        <div className="Admin-clg-wrapper" key={college._id}>
                          <div className="admin-clg-info-wrapper">
                            <div className="admin-clg-img">
                              <img
                                src={college.imageUrl}
                                alt={college.collegeName}
                                // width="100"
                              />
                            </div>
                            <div className="admin-clg-info">
                              <h1 className="text-center admin-clg-name">
                                {college.collegeName}
                              </h1>
                              <div className=" name-clg-category-section">
                                <div>
                                  <span className="admin-num-heading">
                                    nirf -
                                  </span>{" "}
                                  {college.nirf}
                                </div>
                                <div>{college.category} college</div>
                              </div>
                              <div className="name-clg-category-section">
                                <div>
                                  <span className="admin-num-heading">
                                    Address -
                                  </span>{" "}
                                  {college.address}
                                </div>

                                <div>
                                  <span className="admin-num-heading">
                                    Avg Package -
                                  </span>{" "}
                                  {college.avgPackage}
                                </div>
                              </div>
                              <div>
                                <span className="admin-num-heading">
                                  Fees -
                                </span>{" "}
                                {college.fees}
                              </div>
                              <div>
                                <span className="admin-num-heading">
                                  Accreditation -
                                </span>{" "}
                                {college.accreditation}
                              </div>
                              <div>
                                <span className="admin-num-heading">
                                  Ratings -
                                </span>{" "}
                                {college.rating}
                              </div>
                              <div>
                                <span className="admin-num-heading">
                                  Description -
                                </span>{" "}
                                {college.description.length > 100 ? (
                                  <>
                                    {expandedDescriptions[college._id]
                                      ? college.description
                                      : `${college.description.slice(
                                          0,
                                          100
                                        )}...`}
                                    <button
                                      className="read-more-btn"
                                      onClick={() =>
                                        toggleReadMore(college._id)
                                      }
                                    >
                                      {expandedDescriptions[college._id]
                                        ? "Read Less"
                                        : "Read More"}
                                    </button>
                                  </>
                                ) : (
                                  college.description
                                )}
                              </div>
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
                      ))
                    : searchTerm && <p>No products found</p>}
                </div>
              </div>
            )}

            {modalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Edit College</h2>
                  <form onSubmit={handleModalSubmit} className="college-form">
                    <input
                      name="collegeName"
                      defaultValue={editCollege.collegeName}
                      required
                    />
                    <input
                      name="address"
                      defaultValue={editCollege.address}
                      required
                    />
                    <input
                      name="accreditation"
                      defaultValue={editCollege.accreditation}
                      required
                    />
                    <input
                      name="nirf"
                      defaultValue={editCollege.nirf}
                      required
                    />
                    <input
                      name="fees"
                      defaultValue={editCollege.fees}
                      required
                    />
                    <input
                      name="exams"
                      defaultValue={editCollege.exams}
                      required
                    />
                    <input
                      name="avgPackage"
                      defaultValue={editCollege.avgPackage}
                      required
                    />
                    <input
                      name="description"
                      defaultValue={editCollege.description}
                      required
                    />
                    <input
                      name="imageUrl"
                      defaultValue={editCollege.imageUrl}
                      required
                    />
                    <input
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

            {activeSection === "blogAdd" && (
              <div className="blogs-add-container">
                <h2>Add Blog</h2>

                <form onSubmit={handleBlogSubmit} className="college-form">
                  <input
                    type="text"
                    name="title"
                    placeholder="Headline"
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Sub Heading 1"
                    required
                  />
                  <input
                    type="text"
                    name="coursename"
                    placeholder="Sub Heading 2"
                    required
                  />
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Description 1"
                    row={2}
                    required
                  ></textarea>
                  <button type="submit">Add Blog</button>
                </form>
               
              </div>
              
            )}

            {activeSection === "blogList" && (
              <div className="blogs-display-container">
                <h2>Blogs</h2>
                {blogs.map((blog) => (
                  <div key={blog._id} className="blog-card">
                    <h3>{blog.title}</h3>
                    <p>By: {blog.name}</p>
                    <p>Course: {blog.coursename}</p>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />

                    <div className="update-btn-wraper">
                      <button
                        className="button-admin-1"
                        onClick={() => handleUpdateBlog(blog)}
                      >
                        Update
                      </button>
                      <button
                        className="button-admin-1"
                        onClick={() => handleDeleteBlog(blog._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {modalOpen && editCollege && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Blog</h2>
            <form onSubmit={handleModalBlogSubmit} className="blog-form">
              <input name="title" defaultValue={editCollege.title} required />
              <input name="name" defaultValue={editCollege.name} required />
              <input
                name="coursename"
                defaultValue={editCollege.coursename}
                required
              />
              <input name="image" defaultValue={editCollege.image} required />
              <textarea
                name="description"
                defaultValue={editCollege.description}
                required
              ></textarea>

              <button type="submit">Save</button>
              <button type="button" onClick={() => setModalOpen(false)}>
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
          <h2>Welcome To Admin Pannel</h2>
          <p className="welcome">Login For Check Web Details</p>
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" required />
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
