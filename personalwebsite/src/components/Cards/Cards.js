import React from "react";
const Cards = props => {
    return (
        <div className="ui fluid link card">
            <div className="image">
                <img src={props.imgUrl} alt={props.imgAlt} />
            </div>
            <div className="content">
                <a className="header">{props.headerText}</a>
                <div className="meta">
                    <h5>{props.projectType}</h5>
                </div>
                <div className="description">{props.projectDescription}</div>
            </div>
            <div className="extra content">
                <span className="right floated">Joined in 2013</span>
                <span>
                    <i className="user icon" />
                    75 Friends
                </span>
            </div>
        </div>
    );
};

export default Cards;
