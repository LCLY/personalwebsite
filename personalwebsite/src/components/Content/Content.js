import React from "react";
import Card from "../Cards/Cards";
import fliegenImg from "../../images/fliegen.PNG";
import personalWebImg from "../../images/personalwebsite.PNG";
import boilerideImg from "../../images/boileride.PNG";
import libGDX from "../../images/libgdx.png";
import hololens from "../../images/hololens.jpg";
import carnival from "../../images/carnival.png";
import escaperoom from "../../images/escaperoom.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Content = ({ id, project }) => {
    return (
        <div className="ui vertical stripe segment" id={id}>
            <div
                style={{
                    textAlign: "center",
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

            <div className="ui middle aligned stackable grid container card--outerContainer">
                <div className="ui three column grid card__innerContainer">
                    <div className="column">
                        {/* personal website */}
                        <Card
                            imgUrl={personalWebImg}
                            imgAlt="personalwebsite"
                            headerText={project.personalweb.headerText}
                            projectType={project.personalweb.projectType}
                            projectDescription={project.personalweb.desc}
                            linktoGithub={project.personalweb.linktoGithub}
                            pageUrl="https://lcly.github.io/personalwebsite/"
                            projectChallenges={project.personalweb.challenges}
                            projectLessons={project.personalweb.lessons}
                            projectTools={project.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        {/* boileride */}
                        <Card
                            imgUrl={boilerideImg}
                            imgAlt="Boileride"
                            headerText={project.boileride.headerText}
                            projectType={project.boileride.projectType}
                            projectDescription={project.boileride.desc}
                            pageUrl={project.boileride.linktoGithub}
                            projectChallenges={project.boileride.challenges}
                            linktoGithub={project.boileride.linktoGithub}
                            projectLessons={project.boileride.lessons}
                            projectTools={project.boileride.tools}
                        />
                    </div>
                    <div className="column">
                        {/* hololens */}
                        <Card
                            imgUrl={hololens}
                            imgAlt="Hololens"
                            headerText={project.hololens.headerText}
                            projectType={project.hololens.projectType}
                            projectDescription={project.hololens.desc}
                            linktoGithub={project.hololens.linktoGithub}
                            pageUrl={project.hololens.linktoGithub}
                            projectChallenges={project.hololens.challenges}
                            projectLessons={project.hololens.lessons}
                            projectTools={project.hololens.tools}
                        />
                    </div>
                    <div className="column">
                        {/* fliegen */}
                        <Card
                            imgUrl={fliegenImg}
                            imgAlt="fliegen"
                            headerText={project.fliegen.headerText}
                            projectType={project.fliegen.projectType}
                            projectDescription={project.fliegen.desc}
                            linktoGithub={project.fliegen.linktoGithub}
                            pageUrl="http://fliegen.lcly1996.com/signIn"
                            projectChallenges={project.fliegen.challenges}
                            projectLessons={project.fliegen.lessons}
                            projectTools={project.fliegen.tools}
                        />
                    </div>
                    <div className="column">
                        {/* dungeon coder */}
                        <Card
                            imgUrl={libGDX}
                            imgAlt="dungeoncoder"
                            headerText={project.dungeoncoder.headerText}
                            projectType={project.dungeoncoder.projectType}
                            projectDescription={project.dungeoncoder.desc}
                            linktoGithub={project.dungeoncoder.linktoGithub}
                            pageUrl={project.dungeoncoder.linktoGithub}
                            projectChallenges={project.dungeoncoder.challenges}
                            projectLessons={project.dungeoncoder.lessons}
                            projectTools={project.dungeoncoder.tools}
                        />
                    </div>
                    <div className="column">
                        {/* escape room */}
                        <Card
                            imgUrl={escaperoom}
                            imgAlt="escaperoom"
                            headerText={project.escaperoom.headerText}
                            projectType={project.escaperoom.projectType}
                            projectDescription={project.escaperoom.desc}
                            linktoGithub={project.escaperoom.linktoGithub}
                            pageUrl="https://www.youtube.com/embed/c8QX4yS26Pc"
                            projectChallenges={project.escaperoom.challenges}
                            projectLessons={project.escaperoom.lessons}
                            projectTools={project.escaperoom.tools}
                        />
                    </div>
                    <div className="column">
                        {/* Carnival */}
                        <Card
                            imgUrl={carnival}
                            imgAlt="carnival"
                            headerText={project.carnival.headerText}
                            projectType={project.carnival.projectType}
                            projectDescription={project.carnival.desc}
                            linktoGithub={project.carnival.linktoGithub}
                            pageUrl="https://www.youtube.com/embed/kZ6j14Q1mc8"
                            projectChallenges={project.carnival.challenges}
                            projectLessons={project.carnival.lessons}
                            projectTools={project.carnival.tools}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
Content.propTypes = {
    //states
    project: PropTypes.object.isRequired,
};

export default connect(
    state => ({ project: state.content.project }),
    {},
)(Content);
