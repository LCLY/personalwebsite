/* This nav bar shows up when user scrolls down */

import React from "react";
class HiddenNavbar extends React.Component {
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

export default HiddenNavbar;
