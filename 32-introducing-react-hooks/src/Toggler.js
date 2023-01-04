import React from 'react';
import { useState } from 'react';

export default function Toggler() {
	const [isHappy, setIsHappy] = useState(true);
	const toggleIsHappy = () => setIsHappy(!isHappy);

	return (
		<div>
			<h1 onClick={toggleIsHappy}>{isHappy ? '😂' : '😭'}</h1>
		</div>
	);
}
