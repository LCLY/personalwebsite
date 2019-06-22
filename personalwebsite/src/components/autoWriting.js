import React from 'react';
import Typed from 'typed.js';

var options = {
	strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
	typeSpeed: 40,
};

var typed = new Typed('.element', options);

const AutoWriting = () => {
	return <div>{{ typed }}</div>;
};

export default AutoWriting;
