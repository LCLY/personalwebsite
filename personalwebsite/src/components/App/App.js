import React from "react";
import "../../css/style.min.css";
import Typed from "typed.js";

import { CSSTransition } from "react-transition-group";
//components
import Title from "../TopPage/Title";
import Navbar from "../Menu/Navbar";
import MobileMenuBar from "../Menu/MobileMenuBar";
import Content from "../Content/Content";
import HiddenNavbar from "../Menu/HiddenNavbar";
import Particle from "../TopPage/Particle";
import Footer from "../Footer/Footer";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showButtons } from "../../actions/animation";

//Control which iconname
const PlayController = {
    play: {
        iconName: "play",
    },
    pause: {
        iconName: "pause",
    },
};

const getCondition = condition => {
    return condition === true ? "play" : "pause";
};

class App extends React.Component {
    state = {
        condition: false,
        playText: "Playing: ",
        navbarDisplay: false,
        navbarAppear: false,
        load: false,
        startButtons: false,
    };

    //switch the bool val
    onInputChange = event => {
        if (this.state.condition === true) {
            //playing
            this.setState({ playText: "Playing: " });
            this.setState({ condition: !this.state.condition });
        } else {
            this.setState({ playText: "Paused: " });
            this.setState({ condition: !this.state.condition });
        }
        this.typed.toggle();
    };

    onClickDestroyed = event => {
        this.typed.destroy();
        this.setState({ playText: "Deleted: " });
    };

    onClickReset = event => {
        this.typed.reset();
        if (this.state.condition) {
            //paused
            this.setState({ playText: "Paused: " });
        } else {
            //playing
            this.setState({ playText: "Playing: " });
        }
    };
    //trigger show button after certain time
    timer = () => {
        if (this.state.startButtons === false) {
            this.props.showButtons(true);
            this.setState({ startButtons: true });
        }
    };

    //Did rendered
    componentDidMount() {
        const { strings } = this.props;
        //other options such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            shuffle: false,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);

        //load animation on component mount
        this.setState({ load: true });

        this.intervalId = setInterval(this.timer, 1000);
    }

    //Did update and rendered
    componentWillUnmount() {
        // To destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();

        clearInterval(this.intervalId);
    }
    render() {
        const play = getCondition(this.state.condition);
        const { iconName } = PlayController[play];
        return (
            <div>
                <div className="pusher">
                    <div className="wrap ui inverted vertical masthead center aligned segment top_page">
                        <Particle />
                        <MobileMenuBar />
                        <Navbar />
                        {/* if navbar appear show the navbar using transition */}
                        {this.props.insert ? (
                            <CSSTransition
                                in={this.props.show}
                                appear={true}
                                timeout={{ enter: 300, exit: 300 }}
                                classNames="hiddenNavbarTransition"
                            >
                                <HiddenNavbar />
                            </CSSTransition>
                        ) : (
                            ""
                        )}
                        <div className="title title__wrap">
                            <Title />

                            <CSSTransition
                                in={this.props.show_Typing}
                                timeout={1500}
                                classNames="play-title"
                                appear={this.props.show_Typing}
                            >
                                <div className="type-wrap">
                                    <h2 style={{ opacity: this.props.opacity }}>
                                        <span
                                            id="title__type"
                                            style={{ whiteSpace: "pre" }}
                                            ref={el => {
                                                this.el = el;
                                            }}
                                        />
                                    </h2>
                                </div>
                            </CSSTransition>

                            {this.props.show_Buttons ? (
                                <CSSTransition
                                    in={this.props.show_Buttons}
                                    timeout={1500}
                                    classNames="button-title"
                                    appear={this.props.show_Buttons}
                                >
                                    <div
                                        className="buttonsDiv"
                                        id="title__buttons"
                                    >
                                        {/*get iconname at real time */}
                                        <br />
                                        <div id="play_text_container">
                                            <div id="play_text">
                                                {this.state.playText}
                                            </div>
                                            <i
                                                className={`${iconName} icon buttonHover buttonHover1`}
                                                onClick={this.onInputChange}
                                            />
                                            <i
                                                className="redo alternate icon buttonHover buttonHover2"
                                                onClick={this.onClickReset}
                                            />
                                            <i
                                                className="trash icon buttonHover buttonHover3"
                                                onClick={this.onClickDestroyed}
                                            />
                                        </div>
                                    </div>
                                </CSSTransition>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <Content id="section1" />

                    <Footer />
                </div>
            </div>
        );
    }
}
App.propTypes = {
    show: PropTypes.bool.isRequired,
    insert: PropTypes.bool.isRequired,
};

export default connect(
    state => ({
        show: state.navbar.show,
        insert: state.navbar.insert,
        opacity: state.animation.opacity,
        show_Typing: state.animation.show_Typing,
        show_Buttons: state.animation.show_Buttons,
    }),
    { showButtons },
)(App);
