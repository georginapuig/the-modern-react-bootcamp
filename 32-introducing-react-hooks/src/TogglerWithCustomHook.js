import React from 'react';
import useToggle from './hooks/useToggle';

export default function Toggler() {
	const [isHappy, setIsHappy] = useToggle(true);
	const [isHeartbroken, setIsHeartbroken] = useToggle(true);

	return (
		<div>
			<h1>Toggler custom hook</h1>
			<h1 onClick={setIsHappy}>{isHappy ? '😂' : '😭'}</h1>
			<h1 onClick={setIsHeartbroken}>{isHeartbroken ? '💔' : '❤️‍🔥'}</h1>
		</div>
	);
}
