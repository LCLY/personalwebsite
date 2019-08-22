import React, { useState } from "react";
import { statement } from "@babel/template";
const Cards = props => {
    const [formData, setFormData] = useState({
        test: false,
    });
    const { test } = formData;
    const handleLearnMore = () => {
        setFormData({
            ...formData,
            test: !test,
        });
    };
    return (
        <div className="ui fluid link card" id="card--hover">
            <div className="image">
                <a href={props.pageUrl} target="_blank" id="linkFormat">
                    <img
                        src={props.imgUrl}
                        alt={props.imgAlt}
                        style={{ width: "100%", height: "100%" }}
                    />
                </a>
            </div>

            {test ? (
                <div className="content" style={{ cursor: "default" }}>
                    <div>yesh bitch</div>
                </div>
            ) : (
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
            )}

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
    );
};

export default Cards;
