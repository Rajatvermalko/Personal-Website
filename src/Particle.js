import React from 'react';
import Particles from "react-tsparticles";

const Particle = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 180,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "right",
                        speed: 0.5,
                    },
                    size: {
                        value: 1.25,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1.5,
                            opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;
