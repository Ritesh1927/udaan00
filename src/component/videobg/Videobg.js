import React, { Fragment, useState } from "react";
import "../videobg/Videobg.css";
import Videobck from "../../assets/videoback.png";
import Councel from "../../assets/councel2.png";
import { FaCirclePlay } from "react-icons/fa6";
import { FaClock, FaEye } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const videos = [
  {
    id: 1,
    title: "Motivation for Life",
    category: "Educational Content",
    description:
      "Learn how to choose the right career path with expert guidance from Udaan360.",
    url: "https://www.youtube.com/embed/KwFcqoiWB84",
    thumbnail: "https://img.youtube.com/vi/KwFcqoiWB84/0.jpg",
  },
  {
    id: 2,
    title: "Engineering- Salaries, Branches, Opportunities,Admissions",
    category: "Educational Content",
    description:
      "Comprehensive guide to studying abroad including application process, visa requirements, and tips for success.",
    url: "https://www.youtube.com/embed/Le6FsQUx-fQ",
    thumbnail: "https://img.youtube.com/vi/Le6FsQUx-fQ/0.jpg",
  },
  {
    id: 3,
    title: "JEE Mains 2022: Admissions & Results",
    category: "Educational Content",
    description:
      "Best practices and strategies to crack JEE with confidence and excellence.",
    url: "https://www.youtube.com/embed/RV6vD9vjMbI",
    thumbnail: "https://img.youtube.com/vi/RV6vD9vjMbI/0.jpg",
  },
  {
    id: 4,
    title: "Upskilling - What, Why How?",
    category: "Educational Content",
    description:
      "Real-life success stories to inspire and motivate your educational journey.",
    url: "https://www.youtube.com/embed/Knxezc3DGoo",
    thumbnail: "https://img.youtube.com/vi/Knxezc3DGoo/0.jpg",
  },
  {
    id: 5,
    title: "Safe Score for NEET 2022",
    category: "Educational Content",
    description:
      "Step-by-step guidance to apply for scholarships and maximize your funding opportunities.",
    url: "https://www.youtube.com/embed/w3CSP_zUpb8",
    thumbnail: "https://img.youtube.com/vi/w3CSP_zUpb8/0.jpg",
  },
];

const Videobg = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  return (
    <>
      <div className="videos-section">
        <div className="videos-container">
          {/* <!-- Section Header --> */}
          <div className="videos-header">
            <div className="header-content">
              <h2 className="videos-title">
                <i className="fas fa-play-circle">
                  <FaCirclePlay />
                </i>
                Lets Talk About Counseling
              </h2>
              <p className="videos-subtitle">
                Watch our expert guidance sessions and success stories to
                kickstart your journey
              </p>
            </div>
          </div>
          {/* <!-- Videos Grid --> */}
          <div className="videos-grid">
            <div className="video-card featured-video">
              <div className="video-thumbnail">
                <iframe
                  width="100%"
                  height="360"
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="video-overlay">
                  <div className="play-button">
                    <i className="fas fa-play">
                      <FaCirclePlay />
                    </i>
                  </div>
                </div>
              </div>

              <div className="video-info">
                <h3 className="video-title">{selectedVideo.title}</h3>
                <p className="video-description">{selectedVideo.description}</p>
                <div className="video-meta">
                  <span className="video-duration">
                    <i>
                      <FaClock />
                    </i>
                    {selectedVideo.category}
                  </span>
                  <span className="video-views">
                    <i>
                      <FaEye />
                    </i>{" "}
                    Watch Now
                  </span>
                </div>
              </div>
            </div>
            <div className="video-right side-videos">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`video-card ${
                    selectedVideo.id === video.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="video-overlay">
                      <div className="play-button">
                        <i className="fas fa-play">
                          <FaCirclePlay />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="video-text">
                    <h4>{video.title}</h4>
                    <p>{video.category}</p>
                    <span className="video-number">Video {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="videos-footer">
        {/* <button className="view-all-btn"> */}
        <a
          className="view-all-btn"
          target="_blank"
          href="https://youtube.com/@udaancareertalks?si=n1StJhpzYpQGBtGj"
        >
          <span>View All Videos</span>
          <i class="fas fa-arrow-right">
            <FaArrowRightLong />
          </i>
        </a>
        {/* </button> */}
      </div>
    </>
  );
};

export default Videobg;
