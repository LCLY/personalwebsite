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
	return condition === true ? 'play' : 'pause';
};

var start = false;
class App extends React.Component {
	state = { condition: start };

	//switch the bool val
	onInputChange = event => {
		if (start === true) {
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
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}

	render() {
		var playText = 'Control: ';
		const play = getCondition(this.state.condition);
		const { iconName } = PlayController[play];
		return (
			<div className="wrap ui container">
				<div className="titleDiv">
					<h1 className="titleName">HENRY</h1>
				</div>
				<div className="type-wrap">
					<span
						style={{ whiteSpace: 'pre' }}
						ref={el => {
							this.el = el;
						}}
					/>
				</div>
				<div className="buttonsDiv" style={{ border: '1px solid' }}>
					{/*get iconname at real time */}
					<br />
					{playText}
					<i className={`${iconName} icon buttonHover buttonHover1`} onClick={this.onInputChange} />
					<i className="redo alternate icon buttonHover buttonHover2" onClick={() => this.typed.reset()} />
					<i className="trash icon buttonHover buttonHover3" onClick={() => this.typed.destroy()} />
				</div>
			</div>
		);
	}
}

export default App;
