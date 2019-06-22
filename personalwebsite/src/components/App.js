import React from 'react';
import './App.css';
import Typed from 'typed.js';
const PlayController = {
	play: {
		iconName: 'play',
	},
	pause: {
		iconName: 'pause',
	},
};

const getCondition = condition => {
	return condition == true ? 'play' : 'pause';
};

var start = false;
class App extends React.Component {
	//play: true, pause: false

	state = { condition: start };

	//switch the bool val
	onInputChange = event => {
		if (start == true) {
			start = false;
		} else {
			start = true;
		}

		this.typed.toggle();
		this.setState({ condition: start });
		console.log(this.state.condition);
	};

	//Did rendered
	componentDidMount() {
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const { strings } = this.props;
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	//Did update and rendered
	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}

	render() {
		const play = getCondition(this.state.condition);
		const { iconName } = PlayController[play];
		return (
			<div className="wrap">
				<h1>Henry</h1>
				<div className="type-wrap">
					<span
						style={{ whiteSpace: 'pre' }}
						ref={el => {
							this.el = el;
						}}
					/>
				</div>
				<button onClick={this.onInputChange}>
					{/*get iconname at real time */}
					<i className={`${iconName} icon big`} />
				</button>
				<button onClick={() => this.typed.reset()}>
					<i className="reply icon big" />
				</button>
				<button onClick={() => this.typed.destroy()}>
					<i className="trash icon big" />
				</button>
			</div>
		);
	}
}

export default App;
