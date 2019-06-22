import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
	<App
		strings={[
			'Some <i>strings</i> are slanted',
			'Some <strong>strings</strong> are bold',
			'HTML characters &times; &copy;',
		]}
	/>,
	document.querySelector('#root'),
);
