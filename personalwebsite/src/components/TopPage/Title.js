import React from "react";
import { CSSTransition } from "react-transition-group";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showTyping } from "../../actions/animation";

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            load: false,
            startTimer: false,
        };
    }
    componentDidMount() {
        this.setState({ load: true });
        this.intervalId = setInterval(this.timer, 500);
    }

    timer = () => {
        if (this.state.startTimer === false) {
            this.props.showTyping(true);
            this.setState({ startTimer: true });
        }
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="ui text container">
                <CSSTransition
                    in={this.state.load}
                    timeout={1000}
                    classNames="top-title"
                    appear={true}
                >
                    <h1 id="title__name" className="ui inverted header">
                        HENRY
                    </h1>
                </CSSTransition>
            </div>
        );
    }
}
Title.propTypes = {
    show_Typing: PropTypes.bool.isRequired,
    showTyping: PropTypes.func.isRequired,
};

export default connect(
    state => ({ show_Typing: state.animation.show_Typing }),
    { showTyping },
)(Title);
