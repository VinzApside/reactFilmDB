import React, { Component } from 'react';

import API from '../API';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import NoImage from '../images/no_image.jpg';
import Button from './Button';
import Grid from './Grid';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Thumb from './Thumb';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

class Home extends Component {
  state = {
    movies: initialState,
    searchTerm: '',
    isLoadingMore: false,
    loading: false,
    error: false,
  };

  fetchMovies = async (page, searchTerm = '') => {
    try {
      this.setState({ error: false, loading: true });

      const movies = await API.fetchMovies(searchTerm, page);

      this.setState((prev) => ({
        ...prev,
        movies: {
          ...movies,
          results: page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results],
        },
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  handleSearch = (searchTerm) => this.setState({ movies: initialState, searchTerm }, () => this.fetchMovies(1, this.state.searchTerm));

  handleLoadMore = () => this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);

  componentDidMount() {
    this.fetchMovies(1);
  }

  render() {
    const { error, movies, loading, searchTerm } = this.state;

    if (error) {
      return <div>Something went wrong ...</div>;
    } else {
      return (
        <>
          {!searchTerm && movies.results[0] && (
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
              title={movies.results[0].original_title}
              text={movies.results[0].overview}
            />
          )}

          <SearchBar setSearchTerm={this.handleSearch} />
          <Grid header={searchTerm ? 'Results' : 'Popular Movies'}>
            {movies.results.map((movie) => (
              <Thumb
                movieId={movie.id}
                key={movie.id}
                clickable={true}
                image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
              ></Thumb>
            ))}
          </Grid>
          {loading && <Spinner />}
          {movies.page < movies.total_pages && !loading && (
            <Button
              text="Load More"
              callback={() => {
                this.handleLoadMore();
              }}
            />
          )}
        </>
      );
    }
  }
}

export default Home;
