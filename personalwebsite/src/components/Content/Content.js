import React, { useState } from "react";
import Card from "../Cards/Cards";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Content = ({ id, project }) => {
    const [formData, setFormData] = useState({
        displayBool: false,
        displayMore: "none",
    });
    const { displayBool, displayMore } = formData;

    const viewMore = () => {
        if (displayBool) {
            //if true then set to display
            setFormData({ ...state, displayMore: "", displayBool: false });
        } else {
            //set to display none
            setFormData({ ...state, displayMore: "none", displayBool: true });
        }
    };

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
                    {project.map((projectItem, index) => (
                        <>
                            {index > 5 ? (
                                <div
                                    className="column"
                                    key={index}
                                    style={{ display: `${displayMore}` }}
                                >
                                    <Card
                                        imgUrl={projectItem.imgUrl}
                                        imgAlt={projectItem.imgAlt}
                                        headerText={projectItem.headerText}
                                        projectType={projectItem.projectType}
                                        projectDescription={projectItem.desc}
                                        linktoGithub={projectItem.githubLink}
                                        pageUrl={projectItem.pageUrl}
                                        projectChallenges={
                                            projectItem.challenges
                                        }
                                        projectLessons={projectItem.lessons}
                                        projectTools={projectItem.tools}
                                    />
                                </div>
                            ) : (
                                <div className="column" key={index}>
                                    <Card
                                        imgUrl={projectItem.imgUrl}
                                        imgAlt={projectItem.imgAlt}
                                        headerText={projectItem.headerText}
                                        projectType={projectItem.projectType}
                                        projectDescription={projectItem.desc}
                                        linktoGithub={projectItem.githubLink}
                                        pageUrl={projectItem.pageUrl}
                                        projectChallenges={
                                            projectItem.challenges
                                        }
                                        projectLessons={projectItem.lessons}
                                        projectTools={projectItem.tools}
                                    />
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div
                    className="ui button"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    onClick={viewMore}
                >
                    View More&nbsp; <i className="fas fa-caret-down"></i>
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
