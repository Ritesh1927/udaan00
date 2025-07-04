import React, { useEffect, useState } from "react";
import "../dasboard-pages/Blogs.css";
import BLog from "../assets/teaching-blog.jpg";
import axios from "axios";
const Blogs = () => {

  const [blogs, setBlogs] = useState([]);


 const fetchBlogs = async () => {
    const response = await axios.get("/api/blog/list");
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (


  // blogs display container 
         <div className="blogs-display-container">
                <h2>Blogs</h2>
                {blogs.map((blog) => (
                  <div key={blog._id} className="blog-card">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />
                    <h3>{blog.title}</h3>
                    <p>By: {blog.name}</p>
                    <p>Course: {blog.coursename}</p>
                    
                  </div>
                ))}
              </div>

  //   <div className="container">
  //     <h1 className="blogs-heading">Blogs </h1>
  //     <section className="blogs-section-container">
  //       <div className="blogs-img-content">
  //         <img src={BLog} alt="" />{" "}
  //       </div>
  //       <h1 className="blogs-name-container">
  //         Contextualized Learning in World Language Classes
  //       </h1>
  //     </section>
  //   </div>
   );
};
export default Blogs;
