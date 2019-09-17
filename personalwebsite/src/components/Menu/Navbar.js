import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { CSSTransition } from "react-transition-group";
// activeClass - class applied when element is reached
// to - target to scroll to
// spy - make Link selected when scroll is at its targets position
// smooth - animate the scrolling
// offset - scroll additional px (like padding)
// duration - time of the scroll animation, can be a number or a function

class MenuBar extends React.Component {
    constructor() {
        super();
        this.state = {
            load: false,
            startTimer: false,
            startTimer2: false,
            btnOpacity: 0,
            btnOpacity2: 0,
        };
    }
    componentDidMount() {
        this.setState({ load: true });
        this.intervalId = setInterval(this.timer, 800);
        this.intervalId2 = setInterval(this.timer2, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        clearInterval(this.intervalId2);
    }
    timer = () => {
        this.setState({ startTimer: true, btnOpacity: 1 });
    };

    timer2 = () => {
        this.setState({ startTimer2: true, btnOpacity2: 1 });
    };

    render() {
        return (
            <div className="ui menu__bar">
                <div className="ui large secondary inverted pointing menu menu__flex">
                    <div className="item menu__flex--start" id="navProject">
                        <CSSTransition
                            in={this.state.load}
                            timeout={2000}
                            classNames="project-buttons"
                            appear={true}
                        >
                            <a
                                onClick={() =>
                                    scroll.scrollTo(window.innerHeight)
                                }
                            >
                                Projects
                            </a>
                        </CSSTransition>
                    </div>

                    <div className="right item menu__flex--end">
                        <CSSTransition
                            in={this.state.startTimer}
                            timeout={2000}
                            classNames="resume-buttons"
                            appear={this.state.startTimer}
                        >
                            <div>
                                <a
                                    className="ui inverted button"
                                    href="./resume.pdf"
                                    target="_blank"
                                    style={{ opacity: this.state.btnOpacity }}
                                    // download="resume.pdf"
                                >
                                    Resume
                                </a>
                            </div>
                        </CSSTransition>
                        &nbsp;
                        <CSSTransition
                            in={this.state.startTimer2}
                            timeout={2000}
                            classNames="contact-buttons"
                            appear={this.state.startTimer2}
                        >
                            <div>
                                <a
                                    className="ui inverted button"
                                    onClick={() =>
                                        scroll.scrollToBottom({
                                            duration: 2000,
                                        })
                                    }
                                    style={{ opacity: this.state.btnOpacity2 }}
                                >
                                    Contact
                                </a>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBar;
