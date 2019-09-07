import { COUNTRIES } from '../constants';

const countryReducer = (state = [], action) => {
	if (action.type === COUNTRIES.FETCH_SUCCESS) {
		return [...state, ...action.countries];
	}
	return state;
};

export default countryReducer;
