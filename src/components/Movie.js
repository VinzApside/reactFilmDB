import React from 'react';
import { useParams } from 'react-router-dom';

import { useMovieFetch } from '../hooks/useMovieFetch';

//config

//Components
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb';

//Image

//Hook
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading){
    return(<Spinner />)
  }

  if (error){
    return (<div>Something went wrong ...</div>)
  }

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
    </>
  );
};
export default Movie;
