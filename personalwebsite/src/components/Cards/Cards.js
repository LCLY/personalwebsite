import React from "react";

const Cards = props => {
    return (
        <a
            href={props.pageUrl}
            target="_blank"
            style={{ textDecoration: "none" }}
        >
            <div className="ui fluid link card" id="card--hover">
                <div className="image">
                    <img src={props.imgUrl} alt={props.imgAlt} />
                </div>
                <div className="content">
                    <p className="header">{props.headerText}</p>
                    <div className="meta">
                        <h5>{props.projectType}</h5>
                    </div>
                    <div className="description">
                        {props.projectDescription}
                    </div>
                </div>
                <div className="extra content extra--content">
                    <span className="extra--content__start">
                        <a>What I've learnt</a>
                    </span>
                    <span className="right floated extra--content__end">
                        <a href={props.linktoGithub} target="_blank">
                            View code &nbsp;
                            <i class="github icon" />
                        </a>
                    </span>
                </div>
            </div>
        </a>
    );
};

export default Cards;
