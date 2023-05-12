import React, { useState } from "react";
import "../components-css/MyWorkSection.css";
import OneProject from "./OneProject";
import Project from "../projects.json";
import gsap from "gsap";
import TwitterClone from "../imgs/TwitterCloneGIF.mp4";
import SpotifyClone from "../imgs/SpotifyCloneGIF.mp4";
import PathFind from "../imgs/PathfindingVisualizerGIF.mp4";
import CarRental from "../imgs/CarRentalGIF.mp4";

function MyWorkSection() {
  const [activeButton, setActiveButton] = useState(0);
  const [video, setVideo] = useState(TwitterClone);
  let appearing = gsap.timeline();

  const handleButtonClick = (index) => {
    setActiveButton(index);
    appearing.from(".projects-container", { scale: 0 });
    appearing.to(".projects-container", { scale: 1 });
  };

  return (
    <>
      <section className="work-section">
        <div className="work-header-container">
          <div className="left-line"></div>
          <h2 className="work-header">SELECTED WORK</h2>
        </div>
        <div className="project-select-container">
          <button
            className={`project-one project-button ${activeButton === 0 && "active"}`}
            id="one"
            onClick={() => {
              handleButtonClick(0);
              setVideo(TwitterClone);
            }}
          >
            01
          </button>
          <button
            className={`project-two project-button ${activeButton === 1 && "active"}`}
            id="two"
            onClick={() => {
              handleButtonClick(1);
              setVideo(PathFind);
            }}
          >
            02
          </button>
          <button
            className={`project-three project-button ${activeButton === 2 && "active"}`}
            id="three"
            onClick={() => {
              handleButtonClick(2);
              setVideo(SpotifyClone);
            }}
          >
            03
          </button>
          <button
            className={`project-four project-button ${activeButton === 3 && "active"}`}
            id="four"
            onClick={() => {
              handleButtonClick(3);
              setVideo(CarRental);
            }}
          >
            04
          </button>
        </div>
        <div className="projects-container">
          {Project.projects.map(
            (el, index) =>
              index === activeButton && <OneProject direction={el.direction} gif={video} name={el.name} description={el.description} used={el.used} github={el.github} demo={el.demo} key={el.id} />
          )}
        </div>
      </section>
    </>
  );
}

export default MyWorkSection;
