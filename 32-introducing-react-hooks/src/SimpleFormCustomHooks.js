import React from 'react';
import useFormState from './hooks/useFormState';

export default function SimpleFormHooks() {
	const [email, setEmail, resetEmail] = useFormState();

	return (
		<div>
			<h1>The value is...{email} (custom hoooks)</h1>
			<input type='text' value={email} onChange={setEmail} />
			<button onClick={resetEmail}>Ok</button>
		</div>
	);
}
