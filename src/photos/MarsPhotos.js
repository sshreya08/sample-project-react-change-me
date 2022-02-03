import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotos } from '../actions/photos';
import { ImageCard } from './common/imageCard';
import './MarsPhotos.css';

const MarsPhotos = () => {
  const dispatch = useDispatch();

  // initialize states
  const [imageList, setImageList] = useState([]);
  const [pageNumber] = useState(1);
  const [camera, setCamera] = useState('CHEMCAM');

  // Get data from state
  const { data, error, loading } = useSelector((state) => state.photos);

  const getMarsPhotos = useCallback(() => {
    dispatch(getPhotos({ pageNumber, camera }));
  }, [dispatch, pageNumber, camera]);

  useEffect(() => {
    getMarsPhotos();
  }, [getMarsPhotos]);

  useEffect(() => {
    setImageList(data);
  }, [data, getMarsPhotos]);

  const handleChange = (e) => {
    setCamera(e.target.value);
  };

  return (
    <div className="gallery-container">
      <select
        name="select"
        onChange={handleChange}
        className="gallery-container--select"
      >
        {['FHAZ', 'RHAZ', 'CHEMCAM', 'MARDI'].map((n) => {
          return (
            <option key={n} value={n}>
              {n}
            </option>
          );
        })}
      </select>
      {!error && !loading && imageList.length && (
        <div className="scrollable-container">
          {imageList.map((image) => {
            return (
              <ImageCard
                key={image.id}
                src={image.img_src}
                caption={image.rover.name}
              />
            );
          })}
        </div>
      )}
      {error && !loading && (
        <div className="photo-gallery__error">
          Oops!! Something went wrong. Please try after sometime.
        </div>
      )}
      {loading && !imageList.length && <div className="loader"></div>}
    </div>
  );
};

export default MarsPhotos;
