import React from "react";
import Card from "../Cards/Cards";
import { connect } from "react-redux";
import uuid from "uuidv4";
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
                    {project.map(projectItem => (
                        <div className="column" key={uuid()}>
                            <Card
                                imgUrl={projectItem.imgUrl}
                                imgAlt={projectItem.imgAlt}
                                headerText={projectItem.headerText}
                                projectType={projectItem.projectType}
                                projectDescription={projectItem.desc}
                                linktoGithub={projectItem.githubLink}
                                pageUrl={projectItem.pageUrl}
                                projectChallenges={projectItem.challenges}
                                projectLessons={projectItem.lessons}
                                projectTools={projectItem.tools}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
Content.propTypes = {
    //states
    project: PropTypes.array.isRequired,
};

export default connect(
    state => ({ project: state.content.project }),
    {},
)(Content);
