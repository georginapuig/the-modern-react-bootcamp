import React from 'react';
import './App.css';
import Toggler from './Toggler';
import TogglerWithCustomHook from './TogglerWithCustomHook';

function App() {
	return (
		<div className='App'>
			<Toggler />
			<TogglerWithCustomHook />
		</div>
	);
}

export default App;
