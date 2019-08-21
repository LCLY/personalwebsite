import React from "react";
import "../../css/style.min.css";
import Typed from "typed.js";
import Navbar from "../Menu/Navbar";
import MobileMenuBar from "../Menu/MobileMenuBar";
import Content from "../Content/Content";
import HiddenNavbar from "../Menu/HiddenNavbar";
import Particle from "../TopPage/Particle";
import { CSSTransition } from "react-transition-group";
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
    state = { condition: false, playText: "Playing: ", navbarAppear: false };

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
    }

    //Did update and rendered
    componentWillUnmount() {
        // To destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
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
                        {this.state.navbarAppear ? (
                            <CSSTransition
                                in={this.state.activated}
                                appear={true}
                                timeout={{ enter: 500, exit: 500 }}
                                classNames="hiddenNavbarTransition"
                            >
                                <HiddenNavbar />
                            </CSSTransition>
                        ) : (
                            ""
                        )}
                        <div className="title title__wrap">
                            <div className="ui text container">
                                <h1
                                    id="title__name"
                                    className="ui inverted header"
                                >
                                    HENRY
                                </h1>
                            </div>
                            <div className="type-wrap">
                                <h2>
                                    <span
                                        id="title__type"
                                        style={{ whiteSpace: "pre" }}
                                        ref={el => {
                                            this.el = el;
                                        }}
                                    />
                                </h2>
                            </div>
                            <div className="buttonsDiv" id="title__buttons">
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
                        </div>
                    </div>
                    <Content id="section1" />
                </div>
            </div>
        );
    }
}

export default App;
