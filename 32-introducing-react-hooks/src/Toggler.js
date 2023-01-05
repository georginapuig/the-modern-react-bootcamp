import React from 'react';
import { useState } from 'react';

// example of hooks and use state
// needs to refactor to a custom hook
export default function Toggler() {
	const [isHappy, setIsHappy] = useState(true);
	const [isHeartbroken, setIsHeartbroken] = useState(true);
	const toggleIsHappy = () => setIsHappy(!isHappy);
	const toggleIsHeartboken = () => setIsHeartbroken(!isHeartbroken);

	return (
		<div>
			<h1>Toggler hook</h1>
			<h1 onClick={toggleIsHappy}>{isHappy ? '😂' : '😭'}</h1>
			<h1 onClick={toggleIsHeartboken}>{isHeartbroken ? '💔' : '❤️‍🔥'}</h1>
		</div>
	);
}
