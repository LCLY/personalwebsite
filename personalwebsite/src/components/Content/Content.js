import React from "react";
import Card from "../Cards/Cards";
import fliegen from "../../images/fliegen.PNG";
import personalweb from "../../images/personalwebsite.PNG";
export default function Content({ id }) {
    let allTools = {
        personalweb: {
            tools: [
                "React",
                "Redux",
                "Semantic UI",
                "Typed.js",
                "Particle.js",
                "HTML",
                "SCSS",
                "CSS",
                "JS",
            ],
            challenges: [
                "Integrating other libraries and utilize them appropriately.",
                "Making the application web responsive",
            ],
            lessons: [
                "Read the document of the libraries thoroughly.",
                "Note down the problems that need to be solved somewhere.",
                "Make use of media queries to achieve web responsive.",
            ],
        },
    };

    return (
        <div className="ui vertical stripe segment" id={id}>
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
                            imgUrl={personalweb}
                            imgAlt="personalwebsite"
                            headerText="Portfolio"
                            projectType="Web application"
                            projectDescription="Portfolio website to demonstrate my skill sets and let people get to discover more about me"
                            linktoGithub="https://github.com/LCLY/personalwebsite"
                            pageUrl="https://lcly.github.io/personalwebsite/"
                            projectChallenges={allTools.personalweb.challenges}
                            projectLessons={allTools.personalweb.lessons}
                            projectTools={allTools.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
                            linktoGithub="https://github.com/LCLY/boilermake2018"
                            pageUrl="http://fliegen.lcly1996.com/signIn"
                            projectChallenges={allTools.personalweb.challenges}
                            projectLessons={allTools.personalweb.lessons}
                            projectTools={allTools.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
                            projectChallenges={allTools.personalweb.challenges}
                            projectLessons={allTools.personalweb.lessons}
                            projectTools={allTools.personalweb.tools}
                        />
                    </div>
                </div>
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
                            projectChallenges={allTools.personalweb.challenges}
                            projectLessons={allTools.personalweb.lessons}
                            projectTools={allTools.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="BLABLABLA"
                            projectChallenges={allTools.personalweb.challenges}
                            projectLessons={allTools.personalweb.lessons}
                            projectTools={allTools.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="BLABLABLA"
                            projectChallenges={allTools.personalweb.challenges}
                            projectLessons={allTools.personalweb.lessons}
                            projectTools={allTools.personalweb.tools}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
