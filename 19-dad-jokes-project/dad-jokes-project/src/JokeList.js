import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';

const url = 'https://icanhazdadjoke.com';

class JokeList extends Component {
	static defaultProps = {
		numJokesToGet: 10,
	};

	constructor(props) {
		super(props);

		this.state = {
			jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
			loading: false,
		};
		console.log('constructor', this.state.jokes);
		this.seenJokes = new Set(this.state.jokes.map(j => j.joke));
		console.log(this.seenJokes);
	}

	async componentDidMount() {
		if (this.state.jokes.length === 0) this.getJokes();
		console.log('componentDidMount', this.state.jokes);
	}

	async getJokes() {
		try {
			let jokes = [];

			while (jokes.length < this.props.numJokesToGet) {
				let res = await axios.get(url, {
					headers: { Accept: 'application/json' },
				});
				let newJoke = res.data.joke;
				console.log(this.seenJokes.has(newJoke));
				if (!this.seenJokes.has(newJoke)) {
					jokes.push({ id: uuidv4(), joke: newJoke, votes: 0 });
				} else {
					console.log('found a duplicate');
					console.log(newJoke);
				}
			}
			this.setState(
				st => ({
					loading: false,
					jokes: [...st.jokes, ...jokes],
				}),
				() =>
					window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
			);
			window.localStorage.setItem('jokes', JSON.stringify(jokes));
		} catch (error) {
			alert(error);
			this.setState({ loading: false });
		}
	}

	handleVote(id, delta) {
		this.setState(
			st => ({
				jokes: st.jokes.map(j => {
					return j.id === id ? { ...j, votes: j.votes + delta } : j;
				}),
			}),
			() =>
				window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
		);
	}

	handleClick = () => {
		this.setState({ loading: true }, this.getJokes);
	};

	render() {
		console.log('render', this.state.jokes);

		if (this.state.loading) {
			return (
				<div className='JokeList-spinner'>
					<i className='far fa-8x fa-laugh fa-spin' />
					<h1 className='JokeList-title'>Loading...</h1>
				</div>
			);
		}

		let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

		return (
			<div className='JokeList'>
				<div className='JokeList-sidebar'>
					<h1 className='JokeList-title'>
						<span>Dad</span> Jokes
					</h1>
					<img
						src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
						alt='smiley-face'
					/>
					<button className='JokeList-getmore' onClick={this.handleClick}>
						Fetch Jokes
					</button>
				</div>

				<div className='JokeList-jokes'>
					{jokes.map(j => {
						return (
							<Joke
								key={j.id}
								joke={j.joke}
								votes={j.votes}
								upvote={() => this.handleVote(j.id, 1)}
								downvote={() => this.handleVote(j.id, -1)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default JokeList;