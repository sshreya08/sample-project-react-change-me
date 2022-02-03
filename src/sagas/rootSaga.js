import { all } from 'redux-saga/effects';
import { photosSaga } from './photos';

export default function* rootSaga() {
  yield all([photosSaga]);
}
