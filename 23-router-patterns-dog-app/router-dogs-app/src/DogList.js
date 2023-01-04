import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
	render() {
		console.log(this.props.dogs);

		return (
			<div className='DogList'>
				<h1 className='h1 text-center mt-3 mb-5'>Dog List</h1>
				<div className='row'>
					{this.props.dogs.map(d => (
						<div className='Dog col-lg-4 text-center' key={d.name}>
							<Link to={`/dogs/${d.name}`}>
								<img src={d.src} alt={d.name} />
								<h3 className='mt-3 underline'>{d.name}</h3>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default DogList;
