import React from "react";
import Card from "../Cards/Cards";
import fliegenImg from "../../images/fliegen.PNG";
import personalWebImg from "../../images/personalwebsite.PNG";
import boilerideImg from "../../images/boileride.PNG";
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
                            projectChallenges={project.boileride.challenges}
                            linktoGithub={project.boileride.linktoGithub}
                            projectLessons={project.boileride.lessons}
                            projectTools={project.boileride.tools}
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
                        <Card
                            imgUrl={fliegenImg}
                            imgAlt="fliegenImg"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
                            projectChallenges={project.personalweb.challenges}
                            projectLessons={project.personalweb.lessons}
                            projectTools={project.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegenImg}
                            imgAlt="fliegenImg"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
                            projectChallenges={project.personalweb.challenges}
                            projectLessons={project.personalweb.lessons}
                            projectTools={project.personalweb.tools}
                        />
                    </div>
                    <div className="column">
                        <Card
                            imgUrl={fliegenImg}
                            imgAlt="fliegenImg"
                            headerText="Fliegen"
                            projectType="Web application"
                            projectDescription="A web application designed for students and recruiters/professionals to connect more effectively"
                            projectChallenges={project.personalweb.challenges}
                            projectLessons={project.personalweb.lessons}
                            projectTools={project.personalweb.tools}
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
