import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// activeClass - class applied when element is reached
// to - target to scroll to
// spy - make Link selected when scroll is at its targets position
// smooth - animate the scrolling
// offset - scroll additional px (like padding)
// duration - time of the scroll animation, can be a number or a function

class MenuBar extends React.Component {
    scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    render() {
        return (
            <div className="ui menu__bar">
                <div className="ui large secondary inverted pointing menu menu__flex">
                    <a className="item menu__flex--start" id="navProject">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </a>

                    <div className="right item menu__flex--end">
                        <a
                            className="ui inverted button"
                            href="./resume.pdf"
                            download="resume.pdf"
                        >
                            Resume
                        </a>
                        &nbsp;
                        <a
                            className="ui inverted button"
                            onClick={this.scrollToBottom}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBar;
