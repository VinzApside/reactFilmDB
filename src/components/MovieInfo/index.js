import Proptypes from 'prop-types';
import React, { useContext } from 'react';

import API from '../../API';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Context } from '../../context';
import NoImage from '../../images/no_image.jpg';
import Rate from '../Rate';
import Thumb from '../Thumb';
import { Content, Text, Wrapper } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);

  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    console.log(rate);
  };
  return (
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
            <br />
            {user && (
              <div>
                <h3>Rate movie</h3>
                <Rate callback={handleRating} />
              </div>
            )}
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.prototype = {
  movie: Proptypes.object,
};
export default MovieInfo;
