import React, { Fragment, useState, useEffect } from "react";
import "../admin/Admin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editCollege, setEditCollege] = useState(null);

  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);
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
    fetchColleges();
  };


  ////// ------- Search College ------- //////


  const fetchColleges = async () => {
    const response = await fetch("/api/college/list");
    const data = await response.json();
    setColleges(data);
    setFilter(data);
  };


  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilter(colleges);
  }

  const click = () =>{

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
    fetchColleges()
  }, []);

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
}


const fetchBlogs = async () => {
  const response = await fetch("/api/blog/list");
  const data = await response.json();
  setBlogs(data);
}

 
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


           {/* colleges search input  */}

           <div>

          <h1 >Product Search</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={click}>Search</button>
          </div>

           
          
          {/* <div>
            {filter.length > 0
              ? filter.map((product) => (
                  <div key={product.id}>
                    <p>{product.nirf}</p>
                    <p>{product.collegeName}</p>
                    <p>{product.address}</p>
                    <p>{product.fees}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                  </div>
                ))
              : searchTerm && <p>No products found</p>}
          </div>
          */}

          <br />
          <h2> college data</h2>
          <br />
          <div>
            {filter.length > 0
            ? filter.map((college) => (
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
            ))
            : searchTerm && <p>No products found</p>
            }
          
          </div>
        </div>


          {/* blogs add container */}

          <div className="blogs-add-container">
            <h2>Add Blog</h2>
            <form onSubmit={handleBlogSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />
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
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
              />
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
