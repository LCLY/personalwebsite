import React from 'react';
import './App.css';
import Typed from 'typed.js';
import MenuBar from '../Menu/MenuBar';
import Content from '../Content/Content';

//Control which iconname
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
	state = { condition: start, playText: 'Playing: ' };

	//switch the bool val
	onInputChange = event => {
		if (start === true) {
			//playing
			this.setState({ playText: 'Playing: ' });
			start = false;
		} else {
			this.setState({ playText: 'Paused: ' });
			start = true;
		}

		this.typed.toggle();
		this.setState({ condition: start });
		console.log(this.state.condition);
	};

	onClickDestroyed = event => {
		this.typed.destroy();
		this.setState({ playText: 'Deleted: ' });
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
					<div className="wrap ui inverted vertical masthead center aligned segment">
						<MenuBar />
						<div className="ui text container">
							<h1 className="ui inverted header">HENRY</h1>
							<div className="type-wrap">
								<h2>
									<span
										style={{ whiteSpace: 'pre' }}
										ref={el => {
											this.el = el;
										}}
									/>
								</h2>
							</div>
						</div>
						<div className="buttonsDiv">
							{/*get iconname at real time */}
							<br />
							{this.state.playText}
							<i
								className={`${iconName} icon buttonHover buttonHover1`}
								onClick={this.onInputChange}
							/>
							<i
								className="redo alternate icon buttonHover buttonHover2"
								onClick={() => this.typed.reset()}
							/>
							<i
								className="trash icon buttonHover buttonHover3"
								onClick={this.onClickDestroyed}
							/>
						</div>
					</div>
					<Content />
				</div>
			</div>
		);
	}
}

export default App;
