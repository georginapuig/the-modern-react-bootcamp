import { useState } from 'react';

export default function useToggle(initialVal) {
	const [state, setState] = useState(initialVal);
	const toggle = () => setState(!state);

	return [state, toggle];
}
