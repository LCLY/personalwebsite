import React from 'react';
// import './App.css';
import './App.css'
import Typed from 'typed.js';
import MenuBar from '../Menu/MenuBar';
import Content from '../Content/Content';
import Particles from 'react-particles-js';

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

class App extends React.Component {
	state = { condition: false, playText: 'Playing: ' };

	//switch the bool val
	onInputChange = event => {
		if (this.state.condition === true) {
			//playing
			this.setState({ playText: 'Playing: ' });
			this.setState({ condition: !this.state.condition });
		} else {
			this.setState({ playText: 'Paused: ' });
			this.setState({ condition: !this.state.condition });
		}
		this.typed.toggle();
	};

	onClickDestroyed = event => {
		this.typed.destroy();
		this.setState({ playText: 'Deleted: ' });
	};

	onClickReset = event => {
		this.typed.reset();
		if (this.state.condition) {
			//paused
			this.setState({ playText: 'Paused: ' });
		} else {
			//playing
			this.setState({ playText: 'Playing: ' });
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
					<Particles params={{
							"particles": {
								"number": {
									"value": 200,
									"density": {
										"enable": false
									}
								},
								"size": {
									"value": 5,
									"random": true,
									"anim": {
										"speed": 5,
										"size_min": 0.2
									}
								},
								"line_linked": {
									"enable": false
								},
								"move": {
									"random": true,
									"speed": 1,
									"direction": "top",
									"out_mode": "out"
								}
							},
							"interactivity": {
								"events": {
									"onhover": {
										"enable": true,
										"mode": "bubble"
									},
									"onclick": {
										"enable": true,
										"mode": "repulse"
									}
								},
								"modes": {
									"bubble": {
										"distance": 300,
										"duration": 1,
										"size": 5,
										"opacity": 0.8
									},
									"repulse": {
										"distance": 200,
										"duration": 4
									}
								}
							}
						}}
						style={{position:"absolute", zIndex:"0",left:"0"}}/>
						<MenuBar />
					
						<div className="title title__wrap">
							<div className="ui text container">								
									<h1 id="title__name" className="ui inverted header">HENRY</h1>							
								
							</div>
							<div className="type-wrap">
									<h2>
										<span id="title__type"
											style={{ whiteSpace: 'pre' }}
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
									<div id="play_text">{this.state.playText}</div> 
									<i className={`${iconName} icon buttonHover buttonHover1`} onClick={this.onInputChange} />
									<i className="redo alternate icon buttonHover buttonHover2" onClick={this.onClickReset} />
									<i className="trash icon buttonHover buttonHover3" onClick={this.onClickDestroyed} />
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
