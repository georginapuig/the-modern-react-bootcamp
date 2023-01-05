import React from 'react';
import { useState } from 'react';

export default function SimpleFormHooks() {
	const [email, setEmail] = useState();

	const handleChange = e => {
		setEmail(e.target.value);
	};

	return (
		<div>
			<h1>The value is...{email} (hoooks)</h1>
			<input type='text' value={email} onChange={handleChange} />
		</div>
	);
}
