import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import "../components-css/MobileNavBar.css";

function MobileNavBar({ setMenuActive }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();

  const handleBurgerClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  useEffect(() => {
    const sidebarAnimation = gsap.timeline();
    if (isBurgerActive) {
      sidebarAnimation.from(".sidebar-container", { x: "200%" });
      sidebarAnimation.to(".sidebar-container", { x: 0, duration: 1 });
      setTimeout(() => {
        setMenuActive(true);
      }, 800);
    } else {
      sidebarAnimation.from(".sidebar-container", { x: 0 });
      sidebarAnimation.to(".sidebar-container", { x: "200%", duration: 1 });
      setTimeout(() => {
        setMenuActive(false);
      }, 800);
    }
  }, [isBurgerActive]);

  return (
    <>
      <div className="mob-nav">
        <div className="top-part-container">
          <div className="mob-logo-container">
            <p className="mob-letter mob-pos4">I</p>
            <p className="mob-letter mob-pos3">V</p>
            <p className="mob-letter mob-pos2">O</p>
            <p className="mob-letter mob-pos1">A</p>
          </div>
          <div className="mob-burger-container" onClick={handleBurgerClick}>
            <div className={`mob-line mob-line1 ${isBurgerActive && "animate-line1"}`} ref={line1}></div>
            <div className={`mob-line mob-line2 ${isBurgerActive && "animate-line2"}`} ref={line2}></div>
            <div className={`mob-line mob-line3 ${isBurgerActive && "animate-line3"}`} ref={line3}></div>
          </div>
        </div>
        <div className="sidebar-container">
          <ul className="sidebar-list">
            <Link to="about-section" offset={-190} smooth={true}>
              <li className="sidebar-option" onClick={() => setIsBurgerActive(false)}>
                ABOUT
              </li>
            </Link>
            <Link to="work-section" offset={-40} smooth={true}>
              <li className="sidebar-option" onClick={() => setIsBurgerActive(false)}>
                MY WORK
              </li>
            </Link>
            <Link to="contact-section" offset={0} smooth={true}>
              <li className="sidebar-option" onClick={() => setIsBurgerActive(false)}>
                CONTACT
              </li>
            </Link>
            <div className="h-line"></div>
            <a href="https://www.linkedin.com/in/ivo-ashikov/" target="_blank">
              <li className="sidebar-option">LINKEDIN</li>
            </a>
            <a href="https://github.com/IvoAshikov" target="_blank">
              <li className="sidebar-option">GITHUB</li>
            </a>
            <a href="https://codepen.io/AceNKL" target="_blank">
              <li className="sidebar-option">CODEPEN</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNavBar;
