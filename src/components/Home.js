import React from 'react';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';
import Button from './Button';
import Grid from './Grid';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Thumb from './Thumb';

//Config

//Components

//Hook
//Image

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  if (error) {
    return <div>Something went wrong ...</div>;
  } else {
    return (
      <>
        {!searchTerm && state.results[0] && (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        )}

        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={searchTerm ? 'Results' : 'Popular Movies'}>
          {state.results.map((movie) => (
            <Thumb
              movieId={movie.id}
              key={movie.id}
              clickable={true}
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
            ></Thumb>
          ))}
        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && <Button text="Load More" callback={() => setIsLoadingMore(true)} />}
      </>
    );
  }
};

export default Home;
