import React, { Fragment, useState } from "react";
import "../videobg/Videobg.css";
import Videobck from "../../assets/videoback.png";
import Councel from "../../assets/councel2.png";
import { FaCirclePlay } from "react-icons/fa6";
import { FaClock, FaEye } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Complete Career Guidance for Students",
    category: "Educational Content",
    description:
      "Learn how to choose the right career path with expert guidance from Udaan360.",
    url: "https://www.youtube.com/embed/_-WdYbyAUd8",
    thumbnail: "https://img.youtube.com/vi/4Ucdx0gcA_g/0.jpg",
  },
  {
    id: 2,
    title: "Study Abroad: Complete Process",
    category: "Educational Content",
    description:
      "Comprehensive guide to studying abroad including application process, visa requirements, and tips for success.",
    url: "https://www.youtube.com/embed/JL_6v8pQMTU?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/JL_6v8pQMTU/0.jpg",
  },
  {
    id: 3,
    title: "JEE Preparation Strategy",
    category: "Educational Content",
    description:
      "Best practices and strategies to crack JEE with confidence and excellence.",
    url: "https://www.youtube.com/embed/LOUljE8Kx7I?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/LOUljE8Kx7I/0.jpg",
  },
  {
    id: 4,
    title: "Student Success Stories",
    category: "Educational Content",
    description:
      "Real-life success stories to inspire and motivate your educational journey.",
    url: "https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/zpOULjyy-n8/0.jpg",
  },
  {
    id: 5,
    title: "Scholarship Application Guide",
    category: "Educational Content",
    description:
      "Step-by-step guidance to apply for scholarships and maximize your funding opportunities.",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/0.jpg",
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
    </>
  );
};

export default Videobg;
