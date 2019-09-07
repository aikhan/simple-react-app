import { COUNTRIES, SELECTED_COUNTRIES } from '../constants';

const fetchCountries = () => ({
	type: COUNTRIES.FETCH
});

const setCountries = countries => ({
	type: COUNTRIES.FETCH_SUCCESS,
	countries
});
const setSelectedCountries = selectedCountries => ({
	type: SELECTED_COUNTRIES.SET,
	selectedCountries
});
const removeSelectedCountry = countryToRemove => ({
	type: SELECTED_COUNTRIES.REMOVE_ITEM,
	countryToRemove
});
const removeAllSelectedCountries = countryToRemove => ({
	type: SELECTED_COUNTRIES.RESET
});

const setError = error => ({
	type: COUNTRIES.FETCH_FAIL,
	error
});

export {
	fetchCountries,
	setCountries,
	setSelectedCountries,
	setError,
	removeSelectedCountry,
	removeAllSelectedCountries
};
