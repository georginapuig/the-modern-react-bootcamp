import React from 'react';
import './App.css';
import Toggler from './Toggler';
import TogglerWithCustomHook from './TogglerWithCustomHook';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormCustomHooks from './SimpleFormCustomHooks';

function App() {
	return (
		<div className='App'>
			<div>
				<Toggler />
				<TogglerWithCustomHook />
			</div>

			<div>
				<SimpleFormHooks />
				<SimpleFormCustomHooks />
			</div>
		</div>
	);
}

export default App;
