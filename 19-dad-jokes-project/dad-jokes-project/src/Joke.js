import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
	render() {
		return (
			<div className='Joke'>
				<div className='Joke-buttons'>
					<i className='fas fa-arrow-up' onClick={this.props.upvote}></i>
					{this.props.votes}
					<i className='fas fa-arrow-down' onClick={this.props.downvote}></i>
				</div>
				<div className='Joke-text'>{this.props.joke}</div>
			</div>
		);
	}
}

export default Joke;
