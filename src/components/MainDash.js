import React, { useState, Fragment } from 'react';

const MainDash = () => {
	const items = [
		'Afghanistan',
		'Pakistan',
		'UAE',
		'Qatar',
		'Yemen',
		'Angolia',
		'United States',
		'United Kingdom',
		'Tanzania, United Republic of',
		'Uganda',
		'India',
		'Spain'
	];
	const [selectedCountries, setSelectedCountries] = useState([]);
	const [countryList, setCountries] = useState(items);

	const onTextChanged = e => {
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`${value}`, 'i');
			suggestions = items.sort().filter(v => regex.test(v));
			suggestions.map(country => console.log(country));
			setCountries(suggestions);
			renderFilteredList(countrySelected, suggestions);
		} else if (value.length === 0) {
			setCountries(items);
			renderFilteredList(countrySelected, countryList);
		}
	}; //closure captures the state values.
	function countrySelected(country) {
		console.log('set selected country');
		const selectedCountriesSet = new Set([...selectedCountries, country]); //to weed out repetitions
		setSelectedCountries([...selectedCountriesSet]);
	}
	return (
		<Fragment>
			<div>
				<h1>Monarch</h1>
				<input onChange={e => onTextChanged(e)} type='text'></input>
				{renderFilteredList(countrySelected, countryList)}
			</div>

			<div name='selectedCountries'>
				<h4>Selected countries</h4>
				{selectedCountries
					? selectedCountries.map(country => <p key={country}>{country}</p>)
					: null}
			</div>
		</Fragment>
	);
};

const renderFilteredList = (callBack, filteredCountryList) => {
	return filteredCountryList.length === 0 ? null : (
		<ul>
			{filteredCountryList.map(country => (
				<li key={country} onClick={() => callBack(country)}>
					{country}
				</li>
			))}
		</ul>
	);
};

export default MainDash;
