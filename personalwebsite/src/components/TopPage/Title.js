import React from "react";
import { CSSTransition } from "react-transition-group";
class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            load: false,
        };
    }
    componentDidMount() {
        //load animation when the components render
        this.setState({ load: true });
    }

    callTypingAnimation = () => {};

    render() {
        return (
            <div className="ui text container">
                <CSSTransition
                    in={this.state.load}
                    timeout={2000}
                    classNames="top-title"
                    unmountOnExit
                    appear={true}
                    onEntering={this.callTypingAnimation}
                >
                    <h1 id="title__name" className="ui inverted header">
                        HENRY
                    </h1>
                </CSSTransition>
            </div>
        );
    }
}
export default Title;
