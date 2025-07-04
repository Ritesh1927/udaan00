import React from "react";
import "../dasboard-pages/OnlineMba.css";
import MBAbanner from "../../src/assets/Banners-08.jpg";
import Mba from "../assets/Mba1.jpg";
import Mba2 from "../assets/mba2.avif";
import OnlineMbaClg from "../component/onlinembaclg/OnlineMbaClg";

const OnlineMba = () => {
  return (
    <>
      <div className="Online_mba-banner">
        <img src={MBAbanner} alt="" />
      </div>
      <section className="container Mba-first-wrapper">
        <div className="Right-mba-content">
          <h1 className="Mba-heading">
            Online & Distance Learning MBA/PGDM from Top Colleges
          </h1>
          <p className="online-under-heading">
            Accelerate Your Career Without Compromising Your Life
          </p>
          <p className="mba-content">
            In today’s fast-paced world, professionals seek flexibility without
            compromising on quality. Udaan360 connects you with top-tier Online
            and Distance MBA/PGDM programs from India’s most reputed
            institutions — helping you upskill, transition careers, or move up
            the leadership ladder, no matter where you are.
          </p>
        </div>
        <div className="left-mba-content ">
          <img src={Mba} alt="" />
        </div>
      </section>
      {/* ////////////////////////////// */}
      <section className="container mba-secod-section-wrapper">
        <div className="left-mba-2">
          <h1 className="Mba-heading">
            Why Choose an Online/Distance MBA or PGDM?
          </h1>
          <p className="mba-internal-heading">
            Whether you’re a working professional, entrepreneur, or someone
            re-entering the workforce, distance learning gives you access to:
          </p>
          <ul className="why-choose-mba">
            <li>
              Top Colleges & B-Schools: Get certified by premier institutes like
              IIMs, XLRI, Symbiosis, NMIMS, Amity, and more.
            </li>
            <li>
              Flexible Learning: Learn at your own pace while managing your job,
              family, or other responsibilities.{" "}
            </li>
            <li>
              Affordable Education: Save on relocation and living expenses while
              gaining access to quality faculty and global networks.
            </li>
            <li>
              Industry-Relevant Curriculum: Learn trending topics like Digital
              Marketing, Business Analytics, AI in Business, Leadership
              Strategy, and more.
            </li>
          </ul>
        </div>
        <div className="right-mba-2">
          <h1 className="Mba-heading">Career Impact of a Distance MBA/PGDM</h1>
          <p className="mba-internal-heading">
            “It’s not about where you study from. It’s about how you apply what
            you learn.”
          </p>
          <ul className="why-choose-mba">
            <li>
              Salary Boost: Graduates report a 30%–70% average hike post-MBA in
              leadership and domain-specific roles.
            </li>
            <li>
              Career Transition: Shift to high-demand sectors like Consulting,
              Product Management, Analytics, or Entrepreneurship.
            </li>
            <li>
              {" "}
              Leadership Opportunities: Gain credibility and business acumen to
              take on senior roles in your organization.
            </li>
            <li>
              Global Exposure: Many programs offer international immersions,
              cross-border networking, and alumni support.
            </li>
          </ul>
        </div>
      </section>
      <section className="container mba-section-3">
        <div className="left-section-3">
          <img src={Mba2} alt="" />
        </div>
        <div className="right-section-3">
          <h1 className="Mba-heading">Programs We Facilitate Access To:</h1>
          <ul className="why-choose-mba">
            <li>
              Online MBA from IIMs (IIM Indore, IIM Rohtak, IIM Kozhikode)
            </li>
            <li>PGDM from NMIMS Global Access School</li>
            <li> Executive MBA from XLRI, ISB, SP Jain</li>
            <li> UGC/AICTE-approved Distance Learning MBA programs</li>
          </ul>
        </div>
      </section>
      <section className=" container mba-wrapper-5">
        <div className="container mba-section-4">
          <h1 className="Mba-heading">Who Is This For?</h1>
          <p> Working professionals with 2+ years of experience .</p>
          <p> Entrepreneurs & business owners .</p>
          <p> Career switchers to management roles .</p>
          <p> Women restarting careers .</p>
          <p> Government or PSU employees looking to transition .</p>
        </div>
        <div className="container mba-section-4">
          <h1 className="Mba-heading">How Udaan360 Helps You ?</h1>
          <p> Personalized Program Guidance .</p>
          <p> Application Support & SOP Writing .</p>
          <p> Interview Prep & Mentorship .</p>
          <p> Career Coaching Post-Enrollment.</p>
          <p> Scholarship & Fee Consultation .</p>
        </div>
      </section>

      <section className="container mt15">
        <h1 className="Mba-heading">Ready to Udaan?</h1>
        <p className="last-content">
          Empower your career with a globally recognized MBA/PGDM — without
          pressing pause on life. Get expert guidance today and take the first
          step toward your leadership journey.
        </p>
      </section>
      <OnlineMbaClg/>
    </>
  );
};

export default OnlineMba;
