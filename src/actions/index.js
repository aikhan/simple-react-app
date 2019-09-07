import { COUNTRIES } from '../constants';

const fetchCountries = () => ({
	type: COUNTRIES.FETCH
});

const setCountries = countries => ({
	type: COUNTRIES.FETCH_SUCCESS,
	countries
});

const setError = error => ({
	type: COUNTRIES.FETCH_FAIL,
	error
});

export { fetchCountries, setCountries, setError };
