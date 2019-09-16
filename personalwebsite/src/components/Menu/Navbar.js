import React from "react";
import { animateScroll as scroll } from "react-scroll";

// activeClass - class applied when element is reached
// to - target to scroll to
// spy - make Link selected when scroll is at its targets position
// smooth - animate the scrolling
// offset - scroll additional px (like padding)
// duration - time of the scroll animation, can be a number or a function

class MenuBar extends React.Component {
    render() {
        return (
            <div className="ui menu__bar">
                <div className="ui large secondary inverted pointing menu menu__flex">
                    <div className="item menu__flex--start" id="navProject">
                        <a onClick={() => scroll.scrollTo(window.innerHeight)}>
                            Projects
                        </a>
                    </div>

                    <div className="right item menu__flex--end">
                        <a
                            className="ui inverted button"
                            href="./resume.pdf"
                            target="_blank"
                            // download="resume.pdf"
                        >
                            Resume
                        </a>
                        &nbsp;
                        <a
                            className="ui inverted button"
                            onClick={() =>
                                scroll.scrollToBottom({ duration: 2000 })
                            }
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
