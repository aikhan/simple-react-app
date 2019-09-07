import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import CountrySelectorComponent from './components/CountrySelectorComponent';
import { Provider } from 'react-redux';
import configureStore from './store';

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<div className='App'>
				<Navbar title='Anyfin Test App' />
				<CountrySelectorComponent />
			</div>
		</Provider>
	);
}

export default App;
