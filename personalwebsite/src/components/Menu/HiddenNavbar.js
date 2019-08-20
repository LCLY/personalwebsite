/* This nav bar shows up when user scrolls down */
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
class HiddenNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBool: {
                homeState: false,
                portfolioState: false,
                resumeState: false,
                contactState: false,
            },
            activeState: {
                homeActive: "",
                portfolioActive: "",
                resumeActive: "",
                contactActive: "",
            },
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = mode => {
        switch (mode) {
            case 1:
                //home
                scroll.scrollToTop();
                console.log("1");
                break;
            case 2:
                //portfolio
                console.log("yes");
                break;
            case 3:
                //resume

                break;
            case 4:
                //contact
                scroll.scrollToBottom();
                break;
            default:
        }
    };

    render() {
        return (
            <div className="hidden--navbar">
                <div
                    className="ui secondary pointing menu hidden--navbar__flex"
                    id="hiddenNavbar"
                >
                    <a
                        className={`${this.state.activeState.homeActive} item`}
                        onClick={() => this.handleClick(1)}
                    >
                        Home
                    </a>

                    <a
                        className={`${
                            this.state.activeState.portfolioActive
                        } item`}
                        onClick={() => this.handleClick(2)}
                        style={{ padding: 13 }}
                    >
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => this.handleClick(2)}
                        >
                            Projects
                        </Link>
                    </a>
                    <a
                        className={`${
                            this.state.activeState.resumeActive
                        } item`}
                        onClick={() => this.handleClick(3)}
                        href="./resume.pdf"
                        download="resume.pdf"
                    >
                        Resume
                    </a>
                    <div className="right menu">
                        <a
                            className={`ui ${
                                this.state.activeState.contactActive
                            } item`}
                            onClick={() => this.handleClick(4)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HiddenNavbar;
