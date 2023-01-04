import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class RouterRoutes extends Component {
	render() {
		console.log(this.props);
		return (
			<Routes>
				<Route path='/' element={<Navigate to='/dogs' />} />
				<Route path='/dogs' element={<DogList dogs={this.props.dogs} />} />
				<Route
					path='/dogs/:name'
					element={<DogDetails dogs={this.props.dogs} />}
				/>
			</Routes>
		);
	}
}

export default RouterRoutes;
