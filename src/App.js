import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import MainDash from './components/MainDash';

function App() {
	return (
		<div className='App'>
			<Navbar title='Anyfin Test App' />
			<MainDash />
		</div>
	);
}

export default App;
