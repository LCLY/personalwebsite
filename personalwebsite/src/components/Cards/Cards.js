import React from "react";
import "./Cards.css";
const Cards = props => {
    return (
        <div className="ui fluid link card">
            <div className="image">
                <img src={props.imgUrl} alt={props.imgAlt} />
            </div>
            <div className="content">
                <a className="header">{props.headerText}</a>
                <div className="meta">
                    <a>{props.projectType}</a>
                </div>
                <div className="description">{props.projectDescription}</div>
                <div className="extra content">
                    <span className="right floated">Joined in 2013</span>
                    <span>
                        <i className="user icon" />
                        75 Friends
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Cards;
