import React from "react";
import "../components-css/AboutSection.css";
import PortfolioPIC from "../imgs/portfolio.jpg";

function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div className="about-header-container">
          <h2 className="about-header">ABOUT</h2>
          <div className="right-line"></div>
        </div>
        <div className="about-container">
          <div className="about-text-container">
            <p className="about-text">I am determined and eager to prove myself in the front-end development industry, constantly learning and striving to improve my skills.</p>
            <p className="about-text">
              As a self-taught developer, I bring a unique perspective on problem-solving and approach projects with determination and creativity. I believe that with hard work and dedication, I can
              make a valuable contribution to any team.
            </p>
            <p className="about-text"> Some of the technologies that I am familiar with are:</p>
            <div className="technologies-list-container">
              <ul className="technologies-list">
                <li className="technology">HTML5</li>
                <li className="technology">CSS3</li>
                <li className="technology">Tailwind CSS</li>
                <li className="technology">JavaScript</li>
                <li className="technology">GSAP</li>
                <li className="technology">React.js</li>
              </ul>
            </div>
          </div>
          <div className="ph-pos-container">
            <div className="frame-container">
              <div className="frame-top"></div>
              <div className="frame-left"></div>
              <div className="photo-container">
                <img src={PortfolioPIC} className="photo" />
              </div>
              <div className="frame-bottom"></div>
              <div className="frame-right"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
