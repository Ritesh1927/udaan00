import React from "react";
import "../dasboard-pages/Blogs.css";
import BLog from "../assets/teaching-blog.jpg";
const Blogs = () => {
  return (
    <div className="container">
      <h1 className="blogs-heading">Blogs </h1>
      <section className="blogs-section-container">
        <div className="blogs-img-content">
          <img src={BLog} alt="" />{" "}
        </div>
        <h1 className="blogs-name-container">
          Contextualized Learning in World Language Classes
        </h1>
      </section>
    </div>
  );
};
export default Blogs;
