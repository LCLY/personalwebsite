import React from "react";
import Card from "../Cards/Cards";
import fliegen from "../../images/fliegen.PNG";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Content({ id }) {
    return (
        <div className="ui vertical stripe segment" id={id}>
            <button className="ui button" onClick={() => scroll.scrollToTop()}>
                GO UP
            </button>
            <div
                style={{
                    textAlign: "center",
                    margin: "0 auto 0 auto",
                    paddingDown: "1rem",
                }}
            >
                <h1
                    style={{
                        fontSize: "3rem",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    My Projects
                </h1>
            </div>
            <div className="ui middle aligned stackable grid container">
                <div className="ui three column grid">
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="BLABLABLA"
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="BLABLABLA"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
