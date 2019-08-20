/* This nav bar shows up when user scrolls down */
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
class HiddenNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeState: {
                homeState: false,
                portfolioState: false,
                resumeState: false,
                contactState: false,
            },
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = mode => {
        switch (mode) {
            case 1:
                scroll.scrollToTop();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
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
                        className="active item"
                        onClick={() => this.handleClick(1)}
                    >
                        Home
                    </a>
                    <a
                        className={`active item`}
                        onClick={() => this.handleClick(2)}
                    >
                        Portfolio
                    </a>
                    <a className="item" onClick={() => this.handleClick(3)}>
                        Resume
                    </a>
                    <div className="right menu">
                        <a
                            className="ui item"
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
