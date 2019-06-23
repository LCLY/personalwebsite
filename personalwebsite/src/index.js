import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
	<App
		strings={[
			"Hi, I'm Henry",
			'I am a <i>Software Developer</i>',
			'I graduated from <strong>Purdue University</strong>',
			'I do <strong>web development</strong>',
			'I do other exciting stuffs too',
		]}
	/>,
	document.querySelector('#root'),
);
