particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 4,
      },
      line_linked: {
        enable: true,
        distance: 1024,
        color: "#fff",
      },
      move: {
        enable: true,
        speed: 16,
        out_mode: "bounce",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 128,
        },
        push: {
          particles_nb: 1,
        },
      },
    },
  }
);
