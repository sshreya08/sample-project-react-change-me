import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_MARS_CURIOSITY_PHOTOS,
  GET_MARS_CURIOSITY_PHOTOS_SUCCESS,
  GET_MARS_CURIOSITY_PHOTOS_FAILURE,
} from '../actionTypes/photos';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPhotos = async (pageNumber, camera) =>
  await axios.get(API_URL, {
    params: { sol: 1000, page: pageNumber, api_key: API_KEY, camera },
  });

export function* getPhotosSaga(action) {
  const { pageNumber, camera } = action;
  try {
    const body = yield call(getPhotos, pageNumber, camera);
    yield put({
      type: GET_MARS_CURIOSITY_PHOTOS_SUCCESS,
      payload: body['data'].photos,
    });
  } catch (e) {
    yield put({
      type: GET_MARS_CURIOSITY_PHOTOS_FAILURE,
      payload: e.message,
    });
  }
}

export const photosSaga = takeEvery(GET_MARS_CURIOSITY_PHOTOS, getPhotosSaga);
