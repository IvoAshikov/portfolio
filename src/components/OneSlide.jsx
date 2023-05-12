import React, { useState } from "react";
import "../components-css/OneSlide.css";
import jsLogo from "../imgs/js-logo.png";
import tsLogo from "../imgs/ts-logo.png";
import sassLogo from "../imgs/sass-logo.png";
import wpLogo from "../imgs/wp-logo.png";
import htmlLogo from "../imgs/html-logo.png";
import cssLogo from "../imgs/css-logo.png";
import reactLogo from "../imgs/react-logo.png";
import tailwindLogo from "../imgs/tailwind-logo.png";
import gsapLogo from "../imgs/gsap-logo.png";

function OneSlide({ track }) {
  const [isSlideTrackPaused, setIsSlideTrackPaused] = useState(false);

  const pauseSlideTrack = () => {
    setIsSlideTrackPaused(true);
    track(isSlideTrackPaused);
  };
  const playSlideTrack = () => {
    setIsSlideTrackPaused(false);
    track(isSlideTrackPaused);
  };
  return (
    <>
      <img src={htmlLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={cssLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={jsLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={reactLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={tsLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={tailwindLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={sassLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={gsapLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
      <img src={wpLogo} className="slide" onMouseEnter={pauseSlideTrack} onMouseLeave={playSlideTrack} />
    </>
  );
}

export default OneSlide;
