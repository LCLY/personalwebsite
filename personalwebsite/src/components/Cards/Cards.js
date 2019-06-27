import React from 'react';

class Cards extends React.Component {
	render() {
		return (
			<div className="ui link cards">
				<div className="card">
					<div className="image">
						<img src="https://www.pexels.com/photo/nature-red-love-romantic-67636/" />
					</div>
					<div className="content">
						<div className="header">TEST</div>
						<div className="meta">
							<a>Friends</a>
						</div>
						<div className="description">BLABLABLABLABLA</div>
					</div>
					<div className="extra content">
						<span className="right floated">Joined in 2013</span>
						<span>
							<i className="user icon" />75 Friends
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;
