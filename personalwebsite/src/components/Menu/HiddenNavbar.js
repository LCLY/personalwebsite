/* This nav bar shows up when user scrolls down */
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class HiddenNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeActive: "",
            portfolioActive: "",
            resumeActive: "",
            contactActive: "",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = mode => {
        switch (mode) {
            case 1:
                //home
                this.setState({
                    homeActive: "active",
                    portfolioActive: "",
                    resumeActive: "",
                    contactActive: "",
                });
                scroll.scrollToTop();
                break;
            case 2:
                //portfolio
                this.setState({
                    homeActive: "",
                    portfolioActive: "active",
                    resumeActive: "",
                    contactActive: "",
                });
                scroll.scrollTo(window.innerHeight);

                break;
            case 3:
                //resume
                this.setState({
                    homeActive: "",
                    portfolioActive: "",
                    resumeActive: "active",
                    contactActive: "",
                });
                break;
            case 4:
                //contact
                this.setState({
                    homeActive: "",
                    portfolioActive: "",
                    resumeActive: "",
                    contactActive: "active",
                });
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
                        className={`${this.state.homeActive} item`}
                        onClick={() => this.handleClick(1)}
                    >
                        Home
                    </a>

                    <a
                        className={`${this.state.portfolioActive} item`}
                        onClick={() => this.handleClick(2)}
                    >
                        Projects
                    </a>

                    <a
                        className={`${this.state.resumeActive} item`}
                        onClick={() => this.handleClick(3)}
                        href="./resume.pdf"
                        download="resume.pdf"
                    >
                        Resume
                    </a>
                    <div className="right menu">
                        <a
                            className={`ui ${this.state.contactActive} item`}
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
