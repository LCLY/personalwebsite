import React, { useState } from "react";
import { Label } from "semantic-ui-react";
import _ from "lodash";
const sizes = [
    "mini",
    "tiny",
    "small",
    "medium",
    "large",
    "big",
    "huge",
    "massive",
];

const Cards = props => {
    const [formData, setFormData] = useState({
        test: true,
    });
    const { test } = formData;
    const handleLearnMore = () => {
        setFormData({
            ...formData,
            test: !test,
        });
    };
    return (
        <div>
            {test ? (
                <div className="ui fluid link card" id="card--hover">
                    <div>
                        {sizes.map(size => (
                            <Label key={size} size={size}>
                                {_.capitalize(size)}
                            </Label>
                        ))}
                    </div>
                    <div className="image">
                        <a href={props.pageUrl} target="_blank" id="linkFormat">
                            <img
                                src={props.imgUrl}
                                alt={props.imgAlt}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </a>
                    </div>
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
                    </div>
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
                                <i class="github icon" />
                            </a>
                        </span>
                    </div>
                </div>
            ) : (
                <div className="ui fluid link card" id="card--hover">
                    <div className="content" style={{ cursor: "default" }}>
                        <div id="linkFormat" className="header">
                            Project Details
                        </div>
                        <div className="meta">
                            <h5 className="description__heading">Challenges</h5>
                        </div>
                        <div className="description description__info">
                            {props.projectChallenges}
                        </div>
                        <div className="meta">
                            <h5 className="description__heading">
                                What I've learnt
                            </h5>
                        </div>
                        <div className="description description__info">
                            {props.projectLessons}
                        </div>
                    </div>
                    <div
                        className="extra content extra--content"
                        style={{ cursor: "default" }}
                    >
                        <span className="extra--content__start">
                            <a onClick={handleLearnMore}>
                                <i class="fas fa-chevron-circle-left" /> Back
                            </a>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
