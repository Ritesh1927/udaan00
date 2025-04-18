import React, { Fragment } from "react";
import "../videobg/Videobg.css";
import Videobck from "../../assets/videoback.png";
import Councel from "../../assets/councel2.png";

const Videobg = () => {
  return (
    <Fragment>
      <section className="video-section">
        <h1 className="video-description">Lets Talk About Counseling</h1>

        <div className="video-wrapper">
          {/* Background Image */}
          <img src={Videobck} alt="Background shapes" className="video-bg" />

          {/* Thumbnail and Play Button wrapped in link */}
          <a
            href="https://youtu.be/Le6FsQUx-fQ?si=cFYF6Uy_A-uO-e5k" // Replace with your YouTube link
            target="_blank"
            rel="noopener noreferrer"
            className="video-box"
          >
            <img src={Councel} alt="Video Thumbnail" className="thumbnail" />
            <button className="play-btn" aria-label="Play Video">
              ▶
            </button>
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Videobg;
