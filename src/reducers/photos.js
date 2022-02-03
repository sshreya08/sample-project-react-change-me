import {
  GET_MARS_CURIOSITY_PHOTOS_FAILURE,
  GET_MARS_CURIOSITY_PHOTOS_SUCCESS,
  GET_MARS_CURIOSITY_PHOTOS,
} from '../actionTypes/photos';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARS_CURIOSITY_PHOTOS:
      return { loading: true, error: null, data: [] };
    case GET_MARS_CURIOSITY_PHOTOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case GET_MARS_CURIOSITY_PHOTOS_FAILURE: {
      return { loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

export default reducer;
