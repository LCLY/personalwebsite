/* This nav bar shows up when user scrolls down */
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
class HiddenNavbar extends React.Component {
    render() {
        return (
            <div className="hidden--navbar">
                <div
                    className="ui secondary pointing menu hidden--navbar__flex"
                    id="hiddenNavbar"
                >
                    <a
                        className="active item"
                        onClick={() => scroll.scrollToTop()}
                    >
                        Home
                    </a>
                    <a className="active item">Portfolio</a>
                    <a className="item">Resume</a>
                    <div className="right menu">
                        <a className="ui item">Contact</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HiddenNavbar;
