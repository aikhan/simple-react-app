import { all } from 'redux-saga/effects';

import countriesSaga from './countriesSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
	yield all([countriesSaga(), userSaga()]);
}
