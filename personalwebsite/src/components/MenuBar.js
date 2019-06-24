import React from 'react';

const MenuBar = () => {
	return (
		<div class="ui container">
			<div class="ui large secondary inverted pointing menu">
				<div class="right item">
					<a class="ui inverted button" href="/images/resume.pdf" download="Resume.pdf">
						Resume
					</a>
					<a class="ui inverted button">Contact</a>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
