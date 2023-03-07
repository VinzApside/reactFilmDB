import React from 'react';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';
import Grid from './Grid';
import HeroImage from './HeroImage';
import Spinner from './Spinner';
import Thumb from './Thumb';

//Config

//Components

//Hook
//Image

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}

      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            movieId={movie.id}
            key={movie.id}
            clickable={true}
            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
          ></Thumb>
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
