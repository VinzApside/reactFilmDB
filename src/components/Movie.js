import React from 'react';
import { useParams } from 'react-router-dom';

import { useMovieFetch } from '../hooks/useMovieFetch';

//config

//Components

//Image

//Hook
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log({ movie });
  return (
    <>
      <div>Movie</div>
    </>
  );
};
export default Movie;
