import './App.css';
import VendingMachine from './VendingMachine';
import { Routes, Route } from 'react-router-dom';
import Soda from './Soda';
import Sardines from './Sardines';
import Chips from './Chips';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<VendingMachine />} />
				<Route path='/soda' element={<Soda />} />
				<Route path='/sardines' element={<Sardines />} />
				<Route path='/chips' element={<Chips />} />
			</Routes>
		</div>
	);
}

export default App;
