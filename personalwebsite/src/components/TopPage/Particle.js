import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            speed: 5,
                            size_min: 0.2,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: "top",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 300,
                            duration: 1,
                            size: 5,
                            opacity: 0.8,
                        },
                        repulse: {
                            distance: 200,
                            duration: 4,
                        },
                    },
                },
            }}
            style={{ position: "absolute", zIndex: "0", left: "0" }}
        />
    );
};
export default Particle;
