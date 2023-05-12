import tsLogo from "../imgs/ts-logo.svg";
import tailwindLogo from "../imgs/tailwindcss.svg";
import gsapLogo from "../imgs/gsap.svg";

export const heroParticles = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: -3,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    events: {
      onDiv: [
        {
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: "#fff",
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#fff",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: ["images", "character"],
      image: [
        {
          src: `${tsLogo}`,
        },
        {
          src: `${tailwindLogo}`,
        },
        {
          src: `${gsapLogo}`,
        },
      ],

      character: {
        fill: true,
        font: "Font Awesome 6 Brands",
        style: "",
        value: ["\uf13b", "\uf38b", "\uf3b9", "\uf41b", "\uf19a", "\uf41e"],
        weight: "400",
      },
    },

    size: {
      random: {
        enable: true,
        minimumValue: 25,
        maxValue: 35,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: true,
      distance: 100,
      enable: true,
      frequency: 10,
      opacity: 0.2,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
