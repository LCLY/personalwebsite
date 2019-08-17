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
        this.state = { iconColor: "white" };
    }

    scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    componentDidMount() {
        window.onscroll = function() {
            //when the user scroll until it passes the next page, change color to black
            // console.log(window.pageYOffset);
            // console.log("the window height:", window.innerHeight);
            if (window.pageYOffset < window.innerHeight) {
                this.setState({ iconColor: "white" }); //change the icon color to white if still in first page
            } else if (window.pageYOffset >= window.innerHeight) {
                this.setState({ iconColor: "black" }); //change the icon color to black
            }
        }.bind(this);
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        return (
            <div style={{ position: "fixed", zIndex: 4 }} className="hidden">
                <i
                    className="fas fa-bars hidden--bar"
                    style={{
                        color: `${this.state.iconColor}`,
                    }}
                />
            </div>
        );
    }
}

export default HiddenMenuBar;
