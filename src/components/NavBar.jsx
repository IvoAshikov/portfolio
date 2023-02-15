import gsap, { Power2 } from "gsap";
import React, { useState, useRef, useEffect } from "react";
import "../components-css/NavBar.css";
import { Link } from "react-scroll";

function NavBar({ position, mode, setMode }) {
  const [positions, setPositions] = useState([1, 2, 3, 4]);
  const [hover, setHover] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const tlDisappear = gsap.timeline({ paused: true });
    tlDisappear.set(".navbar-container", { y: 0 });
    const tlAppear = gsap.timeline({ paused: true });
    tlAppear.set(".navbar-container", { y: "-100%" });
    if (position >= 100 && !navHidden) {
      tlDisappear.to(".navbar-container", { y: "-100%", duration: 1, ease: Power2.easeOut }).play();
      setNavHidden(true);
    } else if (position < 100 && navHidden) {
      tlAppear.to(".navbar-container", { y: 0, duration: 1, ease: Power2.easeOut }).play();
      setNavHidden(false);
    }
  }, [position]);

  useEffect(() => {
    if (hover) {
      setPositions(shuffleArray(positions));
      setHover(false);
    }
  }, [hover, positions]);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleModeChange = () => {
    if (!mode) {
      document.documentElement.style.setProperty("--primary-color", "#333333");
      document.documentElement.style.setProperty("--secondary-color", "#f3f3f3");
      document.documentElement.style.setProperty("--button-hover", "#4b4b4b");
      document.documentElement.style.setProperty("--project-background-color", "#DEDEDE");
      document.documentElement.style.setProperty("--project-button-hover", "#dfdfdf");
    } else {
      document.documentElement.style.setProperty("--primary-color", "#f3f3f3");
      document.documentElement.style.setProperty("--secondary-color", "#333333");
      document.documentElement.style.setProperty("--button-hover", "#c9c9c9");
      document.documentElement.style.setProperty("--project-background-color", "#3d3d3d");
      document.documentElement.style.setProperty("--project-button-hover", "#3a3a3a");
    }
    setMode(!mode);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="nb-logo-container" ref={container} onMouseEnter={handleMouseEnter}>
          <p className={`nb-letter nb-pos${positions[3]}`}>I</p>
          <p className={`nb-letter nb-pos${positions[2]}`}>V</p>
          <p className={`nb-letter nb-pos${positions[1]}`}>O</p>
          <p className={`nb-letter nb-pos${positions[0]}`}>A</p>
        </div>
        <div className="page-navigation">
          <div className="sections-container">
            <ul className="sections-list">
              <Link to="about-section" offset={-40} smooth={true}>
                <li className="section">ABOUT</li>
              </Link>
              <Link to="work-section" offset={-25} smooth={true}>
                <li className="section">MY WORK</li>
              </Link>
              <Link to="contact-section" offset={0} smooth={true}>
                <li className="section">CONTACT</li>
              </Link>
            </ul>
          </div>
          <div className="links-container">
            <ul className="links-list">
              <a href="https://www.linkedin.com/in/ivo-ashikov/" className="link" target="_blank">
                <li className="list-link">
                  <svg
                    className="feather feather-linkedin"
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect height="12" width="4" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                    <title>LinkedIn</title>
                  </svg>
                </li>
              </a>
              <a href="https://github.com/IvoAshikov" className="link" target="_blank">
                <li className="list-link">
                  <svg
                    className="feather feather-github"
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
                    <title>Github</title>
                  </svg>
                </li>
              </a>
              <a href="https://codepen.io/AceNKL" className="link" target="_blank">
                <li className="list-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-codepen"
                  >
                    <title>CodePen</title>
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                  </svg>
                </li>
              </a>
              <li className="list-link dark-light-mode link" onClick={handleModeChange}>
                {mode ? (
                  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="moon-svg">
                    <path className="heroicon-ui" d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z" />
                    <title>Switch to Dark Mode</title>
                  </svg>
                ) : (
                  <svg
                    className="feather feather-sun sun-svg"
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
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" x2="12" y1="1" y2="3" />
                    <line x1="12" x2="12" y1="21" y2="23" />
                    <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                    <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                    <line x1="1" x2="3" y1="12" y2="12" />
                    <line x1="21" x2="23" y1="12" y2="12" />
                    <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                    <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
                    <title>Switch to Light Mode</title>
                  </svg>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default NavBar;
