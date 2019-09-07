import { SELECTED_COUNTRIES } from '../constants';

const selectedCountryReducer = (state = [], action) => {
	if (action.type === SELECTED_COUNTRIES.SET) {
		const selectedCountriesSet = new Set([...state, action.selectedCountries]); // weed out repetitions
		return [...selectedCountriesSet];
	}
	return state;
};

export default selectedCountryReducer;
