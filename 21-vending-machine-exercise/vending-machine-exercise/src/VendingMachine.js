import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/soda'>Soda</Link>
						</li>
						<li>
							<Link to='/sardines'>Sardines</Link>
						</li>
						<li>
							<Link to='/chips'>Chips</Link>
						</li>
					</ul>
				</nav>

				<h1>Hello im a vending machine</h1>
			</div>
		);
	}
}

export default VendingMachine;
