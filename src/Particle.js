import React from 'react';
import Particles from 'react-tsparticles';

const Particle = () => {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true, // Make sure movement is enabled
            direction: "none", // Particles move randomly
            speed: 3, // Increase speed for more dynamic movement
            random: true, // Enable random movement directions
            straight: false, // Particles don't move in straight lines
            out_mode: "bounce", // Particles will bounce off the edge instead of disappearing
            attract: {
              enable: false, // Disable attraction between particles for smooth flow
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 3,
            },
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.6,
              },
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
