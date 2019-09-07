import { COUNTRIES } from '../constants';

const errorReducer = (state = null, action) => {
	switch (action.type) {
		case COUNTRIES.FETCH_FAIL:
			return action.error;
		case COUNTRIES.FETCH:
		case COUNTRIES.FETCH_SUCCESS:
			return null;

		default:
			return state;
	}
};

export default errorReducer;
