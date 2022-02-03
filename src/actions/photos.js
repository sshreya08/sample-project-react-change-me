import {
  GET_MARS_CURIOSITY_PHOTOS,
  GET_MARS_CURIOSITY_PHOTOS_SUCCESS,
  GET_MARS_CURIOSITY_PHOTOS_FAILURE,
} from '../actionTypes/photos';

export const getPhotos = ({ pageNumber, camera }) => ({
  type: GET_MARS_CURIOSITY_PHOTOS,
  pageNumber,
  camera,
});

export const getPhotosSuccess = (payload) => ({
  type: GET_MARS_CURIOSITY_PHOTOS_SUCCESS,
  payload,
});

export const getPhotosFailure = (payload) => ({
  type: GET_MARS_CURIOSITY_PHOTOS_FAILURE,
  payload,
});
