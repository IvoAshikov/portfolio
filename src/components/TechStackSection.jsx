import React, { useRef, useState } from "react";
import "../components-css/TechStack.css";
import OneSlide from "./OneSlide";

function TechStackSection() {
  const [isSlidePlaying, setIsSlidePlaying] = useState(true);
  const slideRef = useRef();

  const pullData = (data) => {
    if (data) {
      setIsSlidePlaying(true);
    } else {
      setIsSlidePlaying(false);
    }
  };
  return (
    <>
      <section className="techstack-section">
        <div className="techstack-header-container">
          <div className="left-line"></div>
          <h2 className="tech-header">TECH STACK</h2>
          <div className="right-line"></div>
        </div>
        <div className="slider">
          <div className={isSlidePlaying ? "slide-track play-anim" : "slide-track pause-anim"} ref={slideRef}>
            <OneSlide track={pullData} />
            {/* DUPLICATE ONE  */}
            <OneSlide track={pullData} />
            {/* DUPLICATE TWO */}
            <OneSlide track={pullData} />
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStackSection;
