import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, setSelectedCountries } from '../actions';
import CurrencyDisplayComponent from './CurrencyDisplayComponent';

const CountrySelectorComponent = props => {
	const { countries, selectedCountries, error } = props;
	//const [selectedCountries, setSelectedCountries] = useState([]);
	const [suggestedCountries, setSuggestedCountries] = useState([]);

	useEffect(() => {
		if (!sessionStorage.getItem('jwtToken')) {
			console.log('Login Please');
		} else {
			console.log('Fetch countries');
			props.fetchCountries();
		}
	}, []);

	const onTextChanged = e => {
		const value = e.target.value;
		if (value.length > 0) {
			const regex = new RegExp(`${value}`, 'i');
			setSuggestedCountries(countries.sort().filter(v => regex.test(v.name)));
		} else if (value.length === 0) setSuggestedCountries([]);
	}; //closures capture the state values.

	const renderCountryInfo = () => {
		return !selectedCountries ? null : (
			<Fragment>
				<div>
					<input type='text' name='name' placeholder='Enter value in Euros' />
				</div>
				<ul>
					{selectedCountries.map(country => (
						<li key={country.name}>
							Country Name: {country.name} , Country Population:
							{country.population} , Currencies
							{country.currencies.map(currency => (
								<div className='currency-details' key={currency.name}>
									Currency code = {currency.code} , Currency name ={' '}
									{currency.name}, Currency Symbol = {currency.symbol}
								</div>
							))}
						</li>
					))}
				</ul>
			</Fragment>
		);
	};

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
			<div>
				<input onChange={e => onTextChanged(e)} type='text'></input>
				{renderFilteredList(props.setSelectedCountries)}
			</div>
			<div>{countries.name}</div>
			<div name='selectedCountries'>
				<h4>Selected countries</h4>
				{renderCountryInfo()}
			</div>
			{error && <div className='error'>{JSON.stringify(error)}</div>}
		</Fragment>
	);
};

const mapStateToProps = ({ countries, selectedCountries, error }) => ({
	countries,
	selectedCountries,
	error
});

const mapDispatchToProps = dispatch => ({
	fetchCountries: () => dispatch(fetchCountries()),
	setSelectedCountries: country => dispatch(setSelectedCountries(country))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CountrySelectorComponent);
