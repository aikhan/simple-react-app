import { put, call, take } from 'redux-saga/effects';

import { setCountries, setError } from '../actions';
import { COUNTRIES } from '../constants';
import { fetchCountryInfo } from '../api';

export function* handleCountryDataLoad() {
	try {
		const countries = yield call(fetchCountryInfo);
		yield put(setCountries(countries));
	} catch (error) {
		yield put(setError(error.toString()));
	}
}

export default function* watchCountriesLoad() {
	//yield takeEvery(COUNTRIES.FETCH, handleCountryDataLoad);
	//yield take(USER.LOGIN);
	yield take(COUNTRIES.FETCH);
	yield call(handleCountryDataLoad);
}
