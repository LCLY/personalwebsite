import React from 'react';

const MenuBar = () => {
	return (
		<div class="ui container">
			<div class="ui large secondary inverted pointing menu">
				
					<a class="ui ">My Work</a>
				
				<div class="right item">
					<a class="ui inverted button" href="./resume.pdf" download="resume.pdf">
						Resume
					</a>
					<a class="ui inverted button">Contact</a>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
