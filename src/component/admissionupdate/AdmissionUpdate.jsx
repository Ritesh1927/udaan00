import React from "react";
import "./AdmissionUpdate.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
const AdmissionUpdate = () => {
  return (
    <>
      {/* <!-- Admission Updates Section --> */}
      <section className="admission-updates-section">
        <div className="updates-container">
          {/* <!-- Section Header --> */}
          <div className="updates-header">
            <h2 className="updates-title">
              <i className="fas fa-newspaper">
                <FaNewspaper />
              </i>
              Admission Updates
            </h2>
            <p className="updates-subtitle">
              Stay updated with the latest admission news, deadlines, and
              important announcements
            </p>
          </div>

          {/* <!-- Blog Cards Grid --> */}
          <div className="blog-grid">
            {/* <!-- Featured Card --> */}
            <article className="blog-card featured">
              <div className="blog-image">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                  alt="JEE Main 2025"
                />
                <div className="blog-overlay">
                  <div className="read-more-icon">
                    <i className="fas fa-arrow-right">
                      <FaArrowRightLong />
                    </i>
                  </div>
                </div>
                <span className="blog-category">Breaking News</span>
                <span className="blog-urgent">Urgent</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <i className="fas fa-calendar">
                      <FaCalendar />
                    </i>{" "}
                    June 8, 2025
                  </span>
                  <span>
                    <i className="fas fa-user">
                      <FaUser />
                    </i>{" "}
                    Admission Team
                  </span>
                </div>
                <h3 className="blog-title">
                  JEE Main 2025 Session 2 Registration Extended - Don't Miss
                  Out!
                </h3>
                <p className="blog-excerpt">
                  The National Testing Agency (NTA) has extended the
                  registration deadline for JEE Main 2025 Session 2 until June
                  20, 2025. This is your last chance to secure your seat in
                  India's top engineering colleges. Get complete details about
                  the application process, important dates, and preparation
                  tips.
                </p>
                <div className="blog-footer">
                  <div className="blog-author">
                    <div className="author-avatar">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=70&h=70&fit=crop&crop=face"
                        alt="Author"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Arjun Tyagi</h5>
                      <span>Career Counselor</span>
                    </div>
                  </div>
                  <div className="read-time">5 min read</div>
                </div>
              </div>
            </article>

            {/* <!-- Regular Cards --> */}
            <article className="blog-card">
              <div className="blog-image">
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=250&fit=crop"
                  alt="NEET 2025"
                />
                <div className="blog-overlay">
                  <div className="read-more-icon">
                    <i className="fas fa-arrow-right">
                      <FaArrowRightLong />
                    </i>
                  </div>
                </div>
                <span className="blog-category">Medical</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <i className="fas fa-calendar">
                      <FaCalendar />
                    </i>{" "}
                    June 7, 2025
                  </span>
                  <span>
                    <i className="fas fa-eye">
                      <FaEye />
                    </i>{" "}
                    2.5k views
                  </span>
                </div>
                <h3 className="blog-title">
                  NEET 2025 Counselling Process Simplified
                </h3>
                <p className="blog-excerpt">
                  Complete guide to NEET 2025 counselling process, seat
                  allocation, and document verification. Learn about choice
                  filling and important dates.
                </p>
                <div className="blog-footer">
                  <div className="blog-author">
                    <div className="author-avatar">
                      <img
                        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=70&h=70&fit=crop&crop=face"
                        alt="Author"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Dr. Priya Sharma</h5>
                      <span>Medical Advisor</span>
                    </div>
                  </div>
                  <div className="read-time">3 min read</div>
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop"
                  alt="Study Abroad"
                />
                <div className="blog-overlay">
                  <div className="read-more-icon">
                    <i className="fas fa-arrow-right">
                      <FaArrowRightLong />
                    </i>
                  </div>
                </div>
                <span className="blog-category">Study Abroad</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <i className="fas fa-calendar">
                      <FaCalendar />
                    </i>{" "}
                    June 6, 2025
                  </span>
                  <span>
                    <i className="fas fa-eye">
                      <FaEye />
                    </i>{" "}
                    1.8k views
                  </span>
                </div>
                <h3 className="blog-title">
                  Fall 2025 Intake Deadlines for Top Universities
                </h3>
                <p className="blog-excerpt">
                  Don't miss out on Fall 2025 admissions! Here are the upcoming
                  deadlines for top universities in USA, UK, Canada, and
                  Australia.
                </p>
                <div className="blog-footer">
                  <div className="blog-author">
                    <div className="author-avatar">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=70&h=70&fit=crop&crop=face"
                        alt="Author"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Rahul Mehta</h5>
                      <span>Study Abroad Expert</span>
                    </div>
                  </div>
                  <div className="read-time">4 min read</div>
                </div>
              </div>
            </article>
            {/* <!-- View All Button --> */}
            <div className="updates-footer">
              <button
                className="view-all-updates-btn"
                onclick="viewAllUpdates()"
              >
                <span>View All Updates</span>
                <i className="fas fa-arrow-right">
                  <FaArrowRightLong />
                </i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionUpdate;
