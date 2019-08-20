import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import HiddenBG from "./HiddenBG";
// activeClass - class applied when element is reached
// to - target to scroll to
// spy - make Link selected when scroll is at its targets position
// smooth - animate the scrolling
// offset - scroll additional px (like padding)
// duration - time of the scroll animation, can be a number or a function

class MobileMenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconColor: "white",
            fontColor: "white",
            iconName: "fa-bars",
            activated: false,
            firstTime: false,
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
        //for the first time, dont show it
        if (this.state.firstTime === false) {
            this.setState({ firstTime: true });
        }
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
                    <CSSTransition
                        in={this.state.activated}
                        appear={true}
                        timeout={{ enter: 300, exit: 700 }}
                        classNames="bg-icon-1"
                    >
                        <div className="row row--1">
                            <i
                                className="fas fa-home"
                                onClick={() => scroll.scrollToTop()}
                            />
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={this.state.activated}
                        appear={true}
                        timeout={{ enter: 500, exit: 600 }}
                        classNames="bg-icon-2"
                    >
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
                    </CSSTransition>
                    <CSSTransition
                        in={this.state.activated}
                        appear={true}
                        timeout={{ enter: 700, exit: 500 }}
                        classNames="bg-icon-3"
                    >
                        <div className="row row--3">
                            <a
                                href="./resume.pdf"
                                download="resume.pdf"
                                style={{ color: `${this.state.fontColor}` }}
                            >
                                <i className="fas fa-file-download" />
                            </a>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={this.state.activated}
                        appear={true}
                        timeout={{ enter: 800, exit: 500 }}
                        classNames="bg-icon-4"
                    >
                        <div className="row row--4">
                            <i
                                className="fas fa-mobile-alt"
                                onClick={this.scrollToBottom}
                                style={{ fontSize: "1.7rem" }}
                            />
                        </div>
                    </CSSTransition>
                </div>
            </div>
        );
        return (
            <div className="hidden">
                {this.state.firstTime ? (
                    <CSSTransition
                        in={this.state.activated}
                        appear={true}
                        timeout={{ enter: 500, exit: 1000 }}
                        classNames="menuBG"
                    >
                        <HiddenBG />
                    </CSSTransition>
                ) : (
                    ""
                )}
                <i
                    className={`fas ${this.state.iconName} hidden--bar`}
                    style={{
                        color: `${this.state.iconColor}`,
                    }}
                    onClick={this.handleBarClick}
                />
                {this.state.firstTime ? toPresent : ""}
            </div>
        );
    }
}

export default MobileMenuBar;
