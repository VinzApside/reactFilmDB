import Proptypes from 'prop-types';
import React from 'react';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import Thumb from '../Thumb';
import { Content, Text, Wrapper } from './MovieInfo.styles';

//Components
//Config
//Image
const MovieInfo = ({ movie }) => (
  <Wrapper backDrop={movie.backdrop_path}>
    <Content>
      <Thumb image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} clickable={false}></Thumb>
      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.prototype = {
  movie: Proptypes.object,
};
export default MovieInfo;
