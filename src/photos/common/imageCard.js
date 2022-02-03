import React from 'react';
import PropTypes from 'prop-types';
import './imageCard.css';

export const ImageCard = ({ src, caption }) => {
  return (
    <figure className="gallery-card">
      <img className="gallery-img" src={src} alt={caption}></img>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
