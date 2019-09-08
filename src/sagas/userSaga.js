import { put, call, take } from 'redux-saga/effects';

import { userLoginSucess, fetchCountries, setError } from '../actions';
import { USER } from '../constants';
import { login } from '../api';

export function* handleLogin() {
	try {
		const result = yield call(login);
		yield put(userLoginSucess(result));
		yield put(fetchCountries());
	} catch (error) {
		yield put(setError(error.toString()));
	}
}

export default function* watchCountriesLoad() {
	//yield takeEvery(COUNTRIES.FETCH, handleCountryDataLoad);
	//yield take(USER.LOGIN);
	yield take(USER.LOGIN);
	yield call(handleLogin);
}
