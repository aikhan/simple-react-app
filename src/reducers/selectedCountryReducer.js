import { SELECTED_COUNTRIES } from '../constants';

const selectedCountryReducer = (state = [], action) => {
	if (action.type === SELECTED_COUNTRIES.SET) {
		const selectedCountriesSet = new Set([...state, action.selectedCountries]); // weed out repetitions
		return [...selectedCountriesSet];
	}
	if (action.type === SELECTED_COUNTRIES.REMOVE_ITEM) {
		return state.filter(
			country => country.name !== action.countryToRemove.name
		);
	}
	if (action.type === SELECTED_COUNTRIES.RESET) {
		return [];
	}
	return state;
};

export default selectedCountryReducer;
