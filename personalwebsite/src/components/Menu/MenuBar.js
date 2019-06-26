import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

// activeClass - class applied when element is reached
// to - target to scroll to
// spy - make Link selected when scroll is at its targets position
// smooth - animate the scrolling
// offset - scroll additional px (like padding)
// duration - time of the scroll animation, can be a number or a function

const MenuBar = () => {
	// scrollToTop = () => {
	// 	scroll.scrollToTop();
	// };

	return (
		<div className="ui container">
			<div className="ui large secondary inverted pointing menu ">
				<a className="item">
					<Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
						Projects
					</Link>
				</a>

				<div className="right item">
					<a className="ui inverted button" href="./resume.pdf" download="resume.pdf">
						Resume
					</a>
					<a className="ui inverted button">Contact</a>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
