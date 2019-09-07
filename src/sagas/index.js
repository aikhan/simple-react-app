import { put } from 'redux-saga/effects';

import countriesSaga from './countriesSaga';

export default function* rootSaga() {
	yield put({ type: 'HOLA' });
	yield countriesSaga();
}
