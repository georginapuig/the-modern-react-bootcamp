import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

export default function Soda() {
	return (
		<Message>
			<h1>Soda</h1>
			<Link to='/'>Return</Link>
		</Message>
	);
}
