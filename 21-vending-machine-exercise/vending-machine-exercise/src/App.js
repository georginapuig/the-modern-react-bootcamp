import './App.css';
import VendingMachine from './VendingMachine';
import { Routes, Route } from 'react-router-dom';
import Soda from './Soda';
import Sardines from './Sardines';
import Chips from './Chips';
import { NavLink } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/soda'
							className={navData => (navData.isActive ? 'nav' : '')}>
							Soda
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/sardines'
							className={navData => (navData.isActive ? 'nav' : '')}>
							Sardines
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/chips'
							className={navData => (navData.isActive ? 'nav' : '')}>
							Chips
						</NavLink>
					</li>
				</ul>
			</nav>

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
