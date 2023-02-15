import gsap from "gsap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import "../components-css/HeroSection.css";

function HeroSection() {
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);
  useEffect(() => {
    if (!isAnimationPlayed) {
      const formAppearing = gsap.timeline();
      formAppearing.set(".middle-form", { x: "300%" });
      formAppearing.set(".top-form", { x: "300%" });
      formAppearing.set(".bottom-form", { x: "300%" });
      formAppearing.set(".left-form", { x: "-300%" });
      formAppearing.to(".middle-form", { x: "87%", duration: 0.5 });
      formAppearing.to(".top-form", { x: "42.5%", duration: 1 });
      formAppearing.to(".left-form", { x: "-65%", duration: 1 });
      formAppearing.to(".bottom-form", { x: "63.8%", duration: 0.5 });
      setIsAnimationPlayed(true);
    }
  }, []);
  return (
    <>
      <section className="hero-section">
        <div className="text-forms-container">
          <div className="text-container">
            <h3 className="name-text">Hi, my name is Ivo.</h3>
            <h2 className="build-text">I build things for the web.</h2>
            <span className="small-text">Things that look good, work well, load fast and treat you decently.</span>
          </div>
          <svg className="form-one">
            <g transform="matrix(0.53,0,0,0.53,150,200)" opacity="1" style={{ display: "block" }} className="bottom-form">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="0.5"
                  d=" M-65,373.25 C-65,373.25 175.25,237.25 175.25,237.25 C175.25,237.25 14.5,138.25 14.5,138.25 C14.5,138.25 -229.25,272.5 -229.25,272.5 C-229.25,272.5 -65,373.25 -65,373.25z"
                ></path>
              </g>
            </g>
            <g transform="matrix(0.53,0,0,0.53,150,200)" opacity="1" style={{ display: "block" }} className="middle-form">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="0.5"
                  d=" M178.75,-147.75 C178.75,-147.75 175.75,237.25 175.75,237.25 C175.75,237.25 15,138.5 15,138.5 C15,138.5 14.5,-243.75 14.5,-243.75 C14.5,-243.75 178.75,-147.75 178.75,-147.75z"
                ></path>
              </g>
            </g>
            <g transform="matrix(0.53,0,0,0.53,150,200)" opacity="1" style={{ display: "block" }} className="top-form">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  strokeOpacity="1"
                  strokeWidth="0.5"
                  d=" M179,-148.5 C179,-148.5 351,-240.5 351,-240.5 C351,-240.5 185,-337.5 185,-337.5 C185,-337.5 14.5,-243.5 14.5,-243.5 C14.5,-243.5 179,-148.5 179,-148.5z"
                ></path>
              </g>
            </g>
          </svg>
          <svg className="form-two">
            <g style={{ display: "block" }} transform="matrix(0.53,0,0,0.53,0,0)" opacity="1" className="left-form">
              <g opacity="1" transform="matrix(1.3,0,0,1.3,1800,-500)">
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="0.5"
                  d=" M-639,447 C-639,447 -833,561 -833,561 C-833,561 -632,674 -632,674 C-632,674 -439,560 -439,560 C-439,560 -639,447 -639,447z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="button-container">
          <Link to="about-section" offset={-20} smooth={true}>
            <button className="explore-button">Explore</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
