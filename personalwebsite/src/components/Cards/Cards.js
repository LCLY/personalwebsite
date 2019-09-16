import React, { useState } from "react";
import { Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
const Cards = props => {
    const [formData, setFormData] = useState({
        changeContent: true,
        opacity: 0,
    });
    const { changeContent, opacity } = formData;

    //set the front to true when mount component
    const handleLearnMore = () => {
        if (opacity === 0) {
            setFormData({
                ...formData,
                changeContent: !changeContent,
                opacity: 1,
            });
        } else {
            setFormData({
                ...formData,
                changeContent: !changeContent,
                opacity: 0,
            });
        }
    };

    return (
        <div>
            {changeContent ? (
                <div className="ui fluid link card" id="card--hover">
                    <CSSTransition
                        in={props.show_Cards}
                        timeout={1000}
                        classNames="show-cards"
                        appear={props.show_Cards}
                        style={{ opacity: props.cardOpacity }}
                    >
                        <div className="image">
                            <a
                                href={props.pageUrl}
                                target="_blank"
                                id="linkFormat"
                            >
                                <img
                                    src={props.imgUrl}
                                    alt={props.imgAlt}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </a>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={props.show_Cards}
                        timeout={1000}
                        classNames="show-cards"
                        appear={props.show_Cards}
                        style={{ opacity: props.cardOpacity }}
                    >
                        <div className="content" style={{ cursor: "default" }}>
                            <a
                                href={props.pageUrl}
                                target="_blank"
                                id="linkFormat"
                                className="header"
                            >
                                {props.headerText}
                            </a>
                            <div className="meta">
                                <h5>{props.projectType}</h5>
                            </div>
                            <div className="description">
                                {props.projectDescription}
                            </div>
                            <div className="toolsLabel--div">
                                {props.projectTools.map(tool => (
                                    <Label
                                        key={tool}
                                        size="medium"
                                        style={{
                                            marginBottom: "0.2rem",
                                            backgroundColor:
                                                "rgb(236, 236, 236)",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        {tool}
                                    </Label>
                                ))}
                            </div>
                        </div>
                    </CSSTransition>

                    <div
                        className="extra content extra--content"
                        style={{ cursor: "default" }}
                    >
                        <span className="extra--content__start">
                            <a onClick={handleLearnMore}>Learn more</a>
                        </span>
                        <span className="right floated extra--content__end">
                            <a href={props.linktoGithub} target="_blank">
                                View code &nbsp;
                                <i className="github icon" />
                            </a>
                        </span>
                    </div>
                </div>
            ) : (
                <div className="ui fluid link card" id="card--hover">
                    <div className="content" style={{ cursor: "default" }}>
                        <div id="linkFormat" className="header">
                            Reflections
                        </div>
                        <div className="meta">
                            <h5 className="description__heading">Challenges</h5>
                        </div>
                        <CSSTransition
                            in={props.show_Cards}
                            timeout={1000}
                            classNames="show-cards"
                            appear={props.show_Cards}
                            style={{ opacity: props.cardOpacity }}
                        >
                            <div className="description description__info">
                                <ul>
                                    {props.projectChallenges.map(challenge => (
                                        <li key={challenge}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        </CSSTransition>
                        <div className="meta">
                            <h5 className="description__heading">
                                What I've learnt
                            </h5>
                        </div>
                        <CSSTransition
                            in={props.show_Cards}
                            timeout={1000}
                            classNames="show-cards"
                            appear={props.show_Cards}
                            style={{ opacity: props.cardOpacity }}
                        >
                            <div className="description description__info">
                                <ul>
                                    {props.projectLessons.map(lesson => (
                                        <li key={lesson}>{lesson}</li>
                                    ))}
                                </ul>
                            </div>
                        </CSSTransition>
                    </div>

                    <div
                        className="extra content extra--content"
                        style={{ cursor: "default" }}
                    >
                        <span className="extra--content__start">
                            <a onClick={handleLearnMore}>
                                <i className="fas fa-chevron-circle-left" />
                                &nbsp;Back
                            </a>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default connect(state => ({
    show_Cards: state.animation.show_Cards,
    cardOpacity: state.animation.cardOpacity,
}))(Cards);
