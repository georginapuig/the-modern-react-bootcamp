import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DogDetails(props) {
	const params = useParams();

	let name = params.name;
	let currentDog = props.dogs.find(
		dog => dog.name.toLowerCase() === name.toLowerCase()
	);

	return (
		<div className='DogDetails row justify-content-center mt-5'>
			<div className='col-11 col-lg-5'>
				<div className='DogDetails-card card'>
					<img
						className='card-img-top'
						src={currentDog.src}
						alt={currentDog.name}
					/>
					<div className='card-body'>
						<h2 className='card-title'>{currentDog.name}</h2>
						<h4 className='card-subtitle text-muted'>
							{currentDog.age} years old
						</h4>
					</div>
					<ul className='list-group list-group-flush'>
						{currentDog.facts.map((fact, i) => (
							<li className='list-group-item' key={i}>
								{fact}
							</li>
						))}
					</ul>
					<div className='card-body'>
						<Link to='/dogs' className='btn btn-info'>
							Go Back
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
