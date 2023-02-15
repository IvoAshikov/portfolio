import gsap, { Power2 } from "gsap";
import React, { useEffect, useState, useRef } from "react";
import "../components-css/LeftSidebar.css";
import { Link } from "react-scroll";

function LeftSidebar({ position }) {
  const [positions, setPositions] = useState([1, 2, 3, 4]);
  const [hover, setHover] = useState(false);
  const container = useRef(null);
  const [sidebarHidden, setSidebarHidden] = useState(true);

  useEffect(() => {
    const tlDisappear = gsap.timeline({ paused: true });
    tlDisappear.set(".left-sidebar-container", { y: "100%" });
    const tlAppear = gsap.timeline({ paused: true });
    tlAppear.set(".left-sidebar-container", { y: 0 });
    if (position >= 100 && !sidebarHidden) {
      tlDisappear.to(".left-sidebar-container", { y: 0, duration: 1, ease: Power2.easeOut }).play();
      setSidebarHidden(true);
    } else if (position < 100 && sidebarHidden) {
      tlAppear.to(".left-sidebar-container", { y: "100%", duration: 1, ease: Power2.easeOut }).play();
      setSidebarHidden(false);
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

  return (
    <>
      <div className="left-sidebar-container">
        <Link to="hero-section" offset={-250} smooth={true}>
          <div className="ls-logo-container" ref={container} onMouseEnter={handleMouseEnter}>
            <p className={`ls-letter ls-pos${positions[3]}`}>I</p>
            <p className={`ls-letter ls-pos${positions[2]}`}>V</p>
            <p className={`ls-letter ls-pos${positions[1]}`}>O</p>
            <p className={`ls-letter ls-pos${positions[0]}`}>A</p>
          </div>
        </Link>
        <div className="left-sections-container">
          <ul className="left-sections-list">
            <Link to="about-section" offset={-40} smooth={true}>
              <li className="left-about llink">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="left-svg">
                  <title>About</title>
                  <g data-name="user people person users man" id="user_people_person_users_man">
                    <path d="M23.74,16.18a1,1,0,1,0-1.41,1.42A9,9,0,0,1,25,24c0,1.22-3.51,3-9,3s-9-1.78-9-3a9,9,0,0,1,2.63-6.37,1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0A10.92,10.92,0,0,0,5,24c0,3.25,5.67,5,11,5s11-1.75,11-5A10.94,10.94,0,0,0,23.74,16.18Z" />
                    <path d="M16,17a7,7,0,1,0-7-7A7,7,0,0,0,16,17ZM16,5a5,5,0,1,1-5,5A5,5,0,0,1,16,5Z" />
                  </g>
                </svg>
              </li>
            </Link>
            <Link to="work-section" offset={-25} smooth={true}>
              <li className="left-work llink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="left-svg">
                  <title>Work</title>
                  <g id="vuesax_outline_briefcase" data-name="vuesax/outline/briefcase" transform="translate(-108 -188)">
                    <g id="briefcase">
                      <path
                        id="Vector"
                        d="M14.5,17.49h-8c-4.62,0-5.48-2.15-5.7-4.24L.052,5.24a4.742,4.742,0,0,1,.9-3.76C1.852.48,3.342,0,5.5,0h10c2.17,0,3.66.49,4.55,1.48a4.756,4.756,0,0,1,.9,3.77l-.75,7.99C19.982,15.34,19.122,17.49,14.5,17.49Zm-9-16c-1.69,0-2.85.33-3.44.99a3.236,3.236,0,0,0-.52,2.61l.75,8.01c.17,1.58.6,2.89,4.21,2.89h8c3.6,0,4.04-1.31,4.21-2.9l.75-7.99a3.25,3.25,0,0,0-.52-2.62c-.59-.66-1.75-.99-3.44-.99Z"
                        transform="translate(109.498 193.26)"
                      />
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M8.75,5.5A.755.755,0,0,1,8,4.75v-.8C8,2.17,8,1.5,5.55,1.5H3.95C1.5,1.5,1.5,2.17,1.5,3.95v.8a.755.755,0,0,1-.75.75A.755.755,0,0,1,0,4.75v-.8C0,2.19,0,0,3.95,0h1.6C9.5,0,9.5,2.19,9.5,3.95v.8A.755.755,0,0,1,8.75,5.5Z"
                        transform="translate(115.25 189.25)"
                      />
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M2.75,5.5C0,5.5,0,3.8,0,2.78V1.75C0,.34.34,0,1.75,0h2C5.16,0,5.5.34,5.5,1.75v1C5.5,3.79,5.5,5.5,2.75,5.5ZM1.5,1.5V2.78C1.5,3.81,1.5,4,2.75,4S4,3.84,4,2.77V1.5H1.5Z"
                        transform="translate(117.25 199.25)"
                      />
                      <path
                        id="Vector-4"
                        data-name="Vector"
                        d="M.746,4.526a.746.746,0,0,1-.74-.66.753.753,0,0,1,.65-.84,15.775,15.775,0,0,0,7.3-2.88.745.745,0,0,1,1.05.17.754.754,0,0,1-.17,1.05,17.364,17.364,0,0,1-8,3.16Z"
                        transform="translate(121.254 198.244)"
                      />
                      <path
                        id="Vector-5"
                        data-name="Vector"
                        d="M8.137,4.257h-.09a17.152,17.152,0,0,1-7.72-2.89.749.749,0,0,1,.84-1.24,15.753,15.753,0,0,0,7.04,2.64.751.751,0,0,1,.66.83A.722.722,0,0,1,8.137,4.257Z"
                        transform="translate(109.863 198.523)"
                      />
                      <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 188)" fill="none" opacity="0" />
                    </g>
                  </g>
                </svg>
              </li>
            </Link>
            <Link to="contact-section" offset={0} smooth={true}>
              <li className="left-contact llink">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="left-svg">
                  <title>Contact</title>
                  <g data-name="mail email e-mail letter" id="mail_email_e-mail_letter">
                    <path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z" />
                    <path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z" />
                  </g>
                </svg>
              </li>
            </Link>
          </ul>
        </div>
        <div className="vertical-line"></div>
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

export default LeftSidebar;
