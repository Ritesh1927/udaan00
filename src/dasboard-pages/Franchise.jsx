import React, { Fragment, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../dasboard-pages/Franchise.css";


const Franchise = () => {
  const [franchiesData, setFranchiesData] = useState({
    orgizationname: "",
    mobile: "",
    contactperson: "",
    email: "",
    description: "",
    websiteurl: "",
  });
  //  console.log(franchiesData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (e) => {
    setFranchiesData({ ...franchiesData, [e.target.name]: e.target.value });
  };

  const handleSub = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug: Log current state
    console.log("Current form data:", franchiesData);
    console.log("Submitting to:", `${window.location.origin}/api/franchise`);

    try {
      const payload = { ...franchiesData };
      console.log("Payload before sending:", payload);

      const response = await axios.post("/api/franchise", payload, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(response.data.message);

      // Reset form after successful submission
      setFranchiesData({
        orgizationname: "",
        mobile: "",
        contactperson: "",
        email: "",
        description: "",
        websiteurl: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Submission failed";
      console.error("Submission error:", error);
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>

      <div className="form-franchise-container-wrapper container">
        <div>
          <h1 className="franchise-heading">
            Partner with Udaan360: Empower Students, Elevate Futures
          </h1>
          <p className="franchise-under-content ">
            Are you passionate about transforming education and guiding young
            minds toward meaningful careers? <br /> Join hands with Udaan360, a
            leading name in career counseling and student success, as we expand
            our presence across India and globally. We're inviting passionate
            partners and investors to be part of a high-impact, high-growth
            journey right from your city.
          </p>
          <div className="franchise-why-join-wrapper">
            <div className="franchise-content-left">
              <p className="why-udaan"> Why Join Udaan360?</p>
              <ul>
                <li>
                  Collaborate with leading educationists and industry experts
                </li>
                <li>
                  Tap into a booming sector with consistent returns and
                  purpose-driven impact
                </li>
                <li>
                  Leverage our proven model and brand reputation across India
                  and abroad
                </li>
              </ul>
            </div>
            <div className="franchise-content-right">
              <p className="why-udaan">Who We're Looking For</p>
              <ul>
                <li>
                  Individuals with core experience in the education sector,
                  schools, colleges, or study abroad domain
                </li>
                <li>
                  Those with a deep understanding of top colleges, courses, and
                  entrance exams across India and globally
                </li>
                <li>
                  Education-minded professionals with the ability to analyse
                  trends and bring creative ideas
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="franchise-heading">Ready to Lead with Purpose?</h1>
          <p className="why-udaan-1">
            If you have the vision to lead, the drive to grow, and the heart to
            guide students towards successful futures we want to hear from you.
          </p>
          <p className="why-udaan-1">
            {" "}
            Let’s build the future of education together.
          </p>
        </div>
        <div className="form-franchise-container">
          <form className="form-franchise-wrap" onSubmit={handleSub}>
            <div className="franchise-grid-wrp">
              <div className="form-control">
                <input
                  type="text"
                  name="orgizationname"
                  placeholder="Name Of Organisation"
                  onChange={handleInput}
                  className="form-control-franchise"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  name="contactperson"
                  placeholder="Contact person name"
                  onChange={handleInput}
                  className="form-control-franchise"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  onChange={handleInput}
                  className="form-control-franchise"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInput}
                  className="form-control-franchise"
                  required
                />
              </div>
            </div>
            <div className="form-control mt10">
              <input
                type="url"
                name="websiteurl"
                placeholder="Enter your website URL"
                onChange={handleInput}
                className="form-control-franchise"
                required
              />
            </div>
            <div className="franchise-text-area">
              <textarea
                name="description"
                id=""
                rows={5}
                placeholder="About Company"
                onChange={handleInput}
                className="form-control-text-area"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default Franchise;
