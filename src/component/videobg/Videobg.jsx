import React, { Fragment, useState } from "react";
import "../videobg/Videobg.css";
// import Videobck from "../../assets/videoback.png";
// import Councel from "../../assets/councel2.png";
import { FaCirclePlay } from "react-icons/fa6";
import { FaClock, FaEye } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Thumbnail1 from "../../assets/Thumbnail1.png"
import Thumnail2 from "../../assets/Thumbnail2.png"
import Thumnail3 from "../../assets/Thumbnail3.png"
import Thumbnail4 from "../../assets/Thumnail4.png"
import Thumbnail5 from "../../assets/Thumbnail5.png"
const videos = [
    {
        id: 1,
        title: "Academic Pressure: The Dark Truth",
        category: "Educational Content",
        description:
            "THE DARK REALITY OF ACADEMIC PRESSURE #trending #darkreality #academicpressure #ytshorts",
        url: "https://www.youtube.com/embed/JFxbSR-PnBA",
        thumbnail: Thumbnail1,
    },
    {
        id: 2,
        title: "Don’t Choose Career Blindly!",
        category: "Educational Content",
        description:
            "Choosing a course without knowing your potential = Shooting in the dark #career #rightpath #trending",
        url: "https://www.youtube.com/embed/662ycWcpkr0",
        thumbnail: Thumnail3,
    },
    {
        id: 3,
        title: "Right Start, Bright Future",
        category: "Educational Content",
        description:
            "A future where every young mind gets the right start — that’s the vision. #ceo #vision #ytshorts",
        url: "https://www.youtube.com/embed/c1fjCeWBG2M",
        thumbnail: Thumbnail4,
    },
    {
        id: 4,
        title: "Beyond IIT & NEET",
        category: "Educational Content",
        description:
            "Education is more than IIT & NEET — It’s about purpose, not pressure. #education #purpose",
        url: "https://www.youtube.com/embed/5ZYtu7t2pQ0",
        thumbnail: Thumnail2,
    },
    {
        id: 5,
        title: "If Not MBBS?",
        category: "Educational Content",
        description:
            "If not MBBS? #career #alternatives #medical",
        url: "https://www.youtube.com/embed/NRfLRRpjs7A",
        thumbnail: Thumbnail5,
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
                                    className={`video-card ${selectedVideo.id === video.id ? "active" : ""
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
