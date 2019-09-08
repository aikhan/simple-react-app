import { USER } from '../constants';

const userReducer = (state = [], action) => {
	if (action.type === USER.LOGIN_SUCCESS) {
		return [action.token];
	}
	return state;
};

export default userReducer;
