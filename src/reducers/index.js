import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import countryReducer from './countryReducer';
import selectedCountryReducer from './selectedCountryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	error: errorReducer,
	countries: countryReducer,
	selectedCountries: selectedCountryReducer,
	token: userReducer
});

export default rootReducer;
