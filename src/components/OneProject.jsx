import React, { useRef, useState } from "react";
import "../components-css/OneProject.css";

function OneProject({ direction, gif, name, description, used, github, demo }) {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef();
  const playPause = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className="one-project-container" style={{ direction: `${direction}` }}>
        <video
          src={`${gif}`}
          className="project-gif"
          ref={videoRef}
          muted
          loop
          playsInline
          onMouseDown={playPause}
          onMouseOver={() => videoRef.current.play()}
          onMouseOut={() => videoRef.current.pause()}
        ></video>
        <div className="project-text-container">
          <h2 className="project-name">{name}</h2>
          <div className="project-description">
            <p className="description-text">{description}&lrm;</p>
          </div>
          <div className="ul-container">
            <ul className="used-list">
              {used.map((el, index) => (
                <li className="used" key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <ul className="project-links">
              <a href={github} target="_blank">
                <li className="project-link">
                  <svg
                    className="feather feather-github project-icon"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    <title>Github Repository</title>
                  </svg>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneProject;
