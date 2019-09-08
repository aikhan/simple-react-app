import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, setSelectedCountries, userLogin } from '../actions';
import CurrencyDisplayComponent from './CurrencyDisplayComponent';
import './AutoCompleteText.css';

const CountrySelectorComponent = props => {
	const { countries, error } = props;
	//const [selectedCountries, setSelectedCountries] = useState([]);
	const [suggestedCountries, setSuggestedCountries] = useState([]);
	// This is done on purpose, this state is local to the component and should reside locally

	useEffect(() => {
		if (!sessionStorage.getItem('jwtToken')) {
			console.log('Login Please');
			props.userLogin();
		} else {
			console.log('Fetch countries');
			props.fetchCountries();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onTextChanged = e => {
		const value = e.target.value;
		if (value.length > 0) {
			const regex = new RegExp(`${value}`, 'i');
			setSuggestedCountries(countries.sort().filter(v => regex.test(v.name)));
		} else if (value.length === 0) setSuggestedCountries([]);
	}; //closures capture the state values.

	const renderFilteredList = callBack => {
		return !suggestedCountries ? null : (
			<ul>
				{suggestedCountries.map(country => (
					<li key={country.name} onClick={() => callBack(country)}>
						{country.name}
					</li>
				))}
			</ul>
		);
	};

	return (
		<Fragment>
			<div className='autoCompleteText'>
				<input onChange={e => onTextChanged(e)} type='search'></input>
				{renderFilteredList(props.setSelectedCountries)}
				{countries.name}
			</div>
			<div name='selectedCountries'>
				<h4>Selected countries</h4>
				<CurrencyDisplayComponent />
			</div>
			{error && <div className='error'>{JSON.stringify(error)}</div>}
		</Fragment>
	);
};

const mapStateToProps = ({ countries, error }) => ({
	countries,
	error
});

const mapDispatchToProps = dispatch => ({
	fetchCountries: () => dispatch(fetchCountries()),
	setSelectedCountries: country => dispatch(setSelectedCountries(country)),
	userLogin: () => dispatch(userLogin())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CountrySelectorComponent);
