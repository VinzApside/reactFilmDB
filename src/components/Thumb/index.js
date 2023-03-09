import Proptypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb"></Image>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb"></Image>
    )}
  </div>
);

Thumb.prototype = {
  image: Proptypes.string,
  movieId: Proptypes.number,
  clickable: Proptypes.bool,
};

export default Thumb;
