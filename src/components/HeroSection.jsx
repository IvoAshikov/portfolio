import React from "react";
import { useCallback } from "react";
import { Link } from "react-scroll";
import "../components-css/HeroSection.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { heroParticles } from "./heroParticles";
import { useEffect } from "react";

function HeroSection({ mode }) {
  useEffect(() => {
    if (!mode) {
      heroParticles.particles.color = "#949494";
      heroParticles.interactivity.modes.bubble.color = "#949494";
    } else {
      heroParticles.particles.color = "#fff";
      heroParticles.interactivity.modes.bubble.color = "#fff";
    }
  }, [mode]);

  let isInitialized = false;

  const particlesInit = useCallback(async (engine) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);
  return (
    <>
      <Particles className="particles" init={particlesInit} loaded={particlesLoaded} options={heroParticles} />
      <section className="hero-section">
        <div className="text-forms-container">
          <div className="text-container">
            <h3 className="name-text">Hi, my name is Ivo.</h3>
            <h2 className="build-text">I build things for the web.</h2>
            <span className="small-text">Things that look good, work well, load fast and treat you decently.</span>
          </div>
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
