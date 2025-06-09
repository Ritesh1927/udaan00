import React, { Fragment, useState } from "react";
import CareerImg from "../../assets/career.png";
import "./Career.css";
import axios from "axios";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    dob: "",
    address: "",
    expected_salary: "",
    last_salary: "",
    resume: null,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    const maxSize = 5 * 1024 * 1024; // 5MB ko bytes me convert karna
    if (file.size > maxSize) {
      alert("File size 5MB or less allowed!");
      e.target.value = ""; // File input ko reset karna
      return; // Function yahin stop ho jayega
    }
  }

  setFormData({ ...formData, resume: file }); // Agar file size valid hai to state update hoga
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      await axios.post("/api/career/email", data, {
         
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <Fragment>
      <div className="career-banner">
        <img src={CareerImg} alt="" />
      </div>
      <div className="container">
        <h1 className="carrer-heading"> Careers at Udaan360</h1>
        <p className="career-under-heading"> Build Your Future with Us</p>
        <p className="Career-under-content">
          At Udaan360, we don't just offer jobs we build careers. We're a team
          of passionate, driven, and creative individuals committed to making a
          difference. If you're looking for a place where your ideas matter,
          your growth is a priority, and your efforts are truly valued you’re in
          the right place.
        </p>

        <h1 className="carrer-heading"> Why Work With Us?</h1>
        <p className="career-under-heading">
          We believe that great work happens in a great environment. Our company
          culture is built on:
        </p>
        <div className="why-chose-us-career">
          <ul className="inner-why-choose-use">
            {" "}
            <li>Respect & Transparency</li>
            <li>Team Collaboration</li>
            <li>Work-Life Balance</li>
          </ul>
          <ul className="inner-why-choose-use">
            <li>Diversity & Inclusion</li>
            <li>Celebrating Wins — Big or Small</li>
          </ul>
        </div>
        <h1 className="carrer-heading"> Growth & Recognition</h1>
        <p className="career-under-heading">
          We recognize talent. We reward efforts. And we support growth at every
          level.
        </p>
        <ul className="growth-list-career">
          <li>
            {" "}
            Learning Opportunities: Regular training, workshops, and mentorship
            programs to help you upskill.
          </li>
          <li>
            Annual Appraisals & Timely Hikes: Your hard work doesn’t go
            unnoticed we believe in rewarding performance generously.
          </li>
          <li>
            Career Growth: Fast-track promotions and leadership opportunities
            for high performers.
          </li>
          <li>
            Employee of the Month & Rewards: Get recognized and rewarded for
            going above and beyond.
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br></br>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          required
          onChange={handleChange}
        />
        <br></br>
        <input type="date" 
        name="dob"
         required 
         onChange={handleChange} 
         /> 
         <br></br>
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <br></br>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          required
          onChange={handleFileChange}
        />
        <br></br>
        <input
          type="text"
          name="expected_salary"
          placeholder="Expected Salary"
          required
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          name="last_salary"
          placeholder="Last Salary"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default Career;
