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
const setError = error => ({
	type: COUNTRIES.FETCH_FAIL,
	error
});

export { fetchCountries, setCountries, setSelectedCountries, setError };
