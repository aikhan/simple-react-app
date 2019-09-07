import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
	error: errorReducer,
	countries: countryReducer
});

export default rootReducer;
