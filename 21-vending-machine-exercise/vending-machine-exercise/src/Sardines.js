import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

export default function Sardines() {
	return (
		<Message>
			<h1>Sardines</h1>
			<Link to='/'>Return</Link>
		</Message>
	);
}
