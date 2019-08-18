import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// activeClass - class applied when element is reached
// to - target to scroll to
// spy - make Link selected when scroll is at its targets position
// smooth - animate the scrolling
// offset - scroll additional px (like padding)
// duration - time of the scroll animation, can be a number or a function

class HiddenMenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconColor: "white",
            fontColor: "white",
            iconName: "fa-bars",
            activated: false,
        };
        this.handleBarClick = this.handleBarClick.bind(this);
    }

    scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    componentDidMount() {
        var windowHeightY = (window.innerHeight * 90) / 100;
        window.onscroll = function() {
            //when the user scroll until it passes the next page, change color to black
            // console.log(window.pageYOffset);
            // console.log("the window height:", window.innerHeight);
            if (window.pageYOffset < windowHeightY) {
                this.setState({ iconColor: "white", fontColor: "white" }); //change the icon color to white if still in first page
            } else if (
                window.pageYOffset >= windowHeightY - 30 &&
                window.pageYOffset < window.innerHeight - 50
            ) {
                this.setState({ iconColor: "white", fontColor: "black" }); //change the icon color to black
            } else if (window.pageYOffset >= window.innerHeight - 50) {
                this.setState({ iconColor: "black", fontColor: "black" }); //change the icon color to black
            }
        }.bind(this);
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    handleBarClick() {
        //if the hidden bars is clicked and activated, change to cross else change to bars
        if (this.state.activated === false) {
            this.setState({ iconName: "fa-times", activated: true });
        } else {
            this.setState({ iconName: "fa-bars", activated: false });
        }
    }

    render() {
        const toPresent = (
            <div
                className="hidden--list"
                style={{
                    color: `${this.state.fontColor}`,
                    fontSize: "1.5rem",
                }}
            >
                <div className="col">
                    <div className="row row--1">
                        <i
                            className="fas fa-home"
                            onClick={() => scroll.scrollToTop()}
                        />
                    </div>
                    <div className="row row--2">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={500}
                        >
                            <i className="fas fa-file-code" />
                        </Link>
                    </div>
                    <div className="row row--3">
                        <a
                            href="./resume.pdf"
                            download="resume.pdf"
                            style={{ color: `${this.state.fontColor}` }}
                        >
                            <i className="fas fa-file-download" />
                        </a>
                    </div>
                    <div className="row row--4">
                        <i
                            className="fas fa-mobile-alt"
                            onClick={this.scrollToBottom}
                            style={{ fontSize: "1.7rem" }}
                        />
                    </div>
                </div>
            </div>
        );
        return (
            <div className="hidden">
                <div className="hidden__background">
                    <i
                        className={`fas ${this.state.iconName} hidden--bar`}
                        style={{
                            color: `${this.state.iconColor}`,
                        }}
                        onClick={this.handleBarClick}
                    />
                    {this.state.activated ? toPresent : ""}
                </div>
            </div>
        );
    }
}

export default HiddenMenuBar;
