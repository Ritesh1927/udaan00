import React, { Fragment, useState } from "react";
import "./Contact.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
const Conatct = () => {
  const [data, setdata] = useState();

  const getdata = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);

  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = ["BCA", "MCA", "B.TECH", "M.TECH", "BBA", "MBA"];

  const handleChange = (event) => {
    setSelectedCourse(event.target.value); // Ensure this updates the state
    // console.log("Selected Course:", event.target.value); // Debugging
  };
  


  const submitdata = async()=>{

        if (!data?.name || !data?.email || !data?.mobile || !data?.percentage) {
         toast.error("Please fill all required fields before submitting!");
        return; // Stop submission if fields are empty
       }
  
       try {
        const finalData = { ...data, course: selectedCourse };
        // console.log("Final Data:", { ...data, course: selectedCourse }); // Debugging
        const response = await axios.post('http://localhost:4000/contact', finalData);
        // console.log(response);
         console.log(response.data.message);
         toast.success(response.data.message);
         
       } catch (error) {
        const errorMessage = error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMessage); // Display error message from backend

       }
  }
 
  return (
    <Fragment>
      <div className="Register-p-cont">
        {/* <div className="Register-m-cont">
          <div className="Register-head-cont">
            <h5 className="contact-heading">
              Register for your counselling sessions now
            </h5>
          </div>
          <div className="s-input-cont">
            <div>
              <label htmlFor="#" className="s-input-label-wrap">
                {" "}
                Name{" "}
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="Register-input-wrap"
                name="name"
                onChange={getdata}
              />
            </div>

            <div>
              <label htmlFor="#" className="s-input-label-wrap">
                {" "}
                Mobile{" "}
              </label>{" "}
              <br />
              <input
                type="number"
                placeholder="+91  |  Mobile Number*"
                className="Register-input-wrap"
                name="mobile"
                onChange={getdata}
              />
            </div>

            <div>
              <label htmlFor="#" className="s-input-label-wrap">
                {" "}
                Email{" "}
              </label>{" "}
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="Register-input-wrap"
                name="email"
                onChange={getdata}
              />
            </div>
          </div>
        </div> */}
        <div className="register-form-container">
          <h4 className="contact-heading">
            Register for your counselling sessions now
          </h4>
          <div className="regiter-elements-content ">
            <div className="form-fill-section upper-section-form">
              <i>
                <IoPersonOutline />
              </i>
              <input
                type="text"
                placeholder="Enter your Name"
                className="register-input-section"
                name="name"
                onChange={getdata}
              />
            </div>
            <div className="form-fill-section upper-section-form">
              <i>
                <LuPhone />
              </i>

              <input
                type="number"
                placeholder="Mobile Number*"
                className="register-input-section"
                name="mobile"
                onChange={getdata}
              />
            </div>
          </div>
          <div className="form-fill-section">
            <i>
              <IoMailOutline />
            </i>
            <input
              type="email"
              placeholder="Enter your email"
              className="register-input-section"
              name="email"
              onChange={getdata}
            />
          </div>
          <div className="form-fill-section">
            <i>
              <TbCirclePercentage />
            </i>

            <input
              type="text"
              placeholder=" 12th Percentage"
              className="register-input-section"
              name="percentage"
              onChange={getdata}
            />
          </div>
          <div>
            {/* <label htmlFor="#" className="s-input-label-wrap">
              {" "}
              Select Course
            </label>{" "}
            <br /> */}
            <select
              className="course-dropdown"
              id="courses"
              value={selectedCourse}
              onChange={handleChange}
            >
              <option className="course-dropdown-option" value="" disabled>
                Courses
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className="register-btn-container">
            <button className="Register-b-wrap" onClick={submitdata}>
              Register Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Conatct;
