import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
	<App
		strings={[
			"Hi, I'm Henry.",
			'I am a <strong><i>Software Developer.</i></strong>',
			'I graduated from <strong>Purdue University.</strong>',
			'I do <strong>Web Development.</strong>',
			'I do other exciting stuffs too!',
			'I am trilingual.',
			'I am a <strong>team player.</strong>',
		]}
	/>,
	document.querySelector('#root'),
);
