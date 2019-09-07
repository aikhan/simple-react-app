import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import countryReducer from './countryReducer';
import selectedCountryReducer from './selectedCountryReducer';

const rootReducer = combineReducers({
	error: errorReducer,
	countries: countryReducer,
	selectedCountries: selectedCountryReducer
});

export default rootReducer;
