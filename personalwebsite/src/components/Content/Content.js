import React from "react";
import Card from "../Cards/Cards";
import fliegen from "../../images/fliegen.PNG";
import personalweb from "../../images/personalwebsite.PNG";
export default function Content({ id }) {
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
                            projectChallenges="blablablablablablablala"
                            projectLessons="blablablablablablablala"
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
                            projectChallenges="blablablablablablablala"
                            projectLessons="blablablablablablablala"
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegen}
                            imgAlt="fliegen"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
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
