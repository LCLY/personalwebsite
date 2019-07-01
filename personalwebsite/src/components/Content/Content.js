import React from 'react';
import './Content.css';
import Card from '../Cards/Cards';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Content({ id }) {
	return (
		<div className="ui vertical stripe segment" id={id}>
			<button className="ui button" onClick={() => scroll.scrollToTop()}>
				GO UP
			</button>
			<div className="ui middle aligned stackable grid container">
				<div className="ui three column grid">
					<div className="column">
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
					</div>
					<div className="column">
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
					</div>
					<div className="column">
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
						<Card imgUrl="https://html.com/wp-content/uploads/flamingo.jpg" headerText="TESTING" />
					</div>
				</div>
			</div>
		</div>
	);
}
