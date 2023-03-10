import { useEffect, useState } from 'react';

import API from '../API';
import { isPersistatedState } from '../helpers';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        console.log({ movieId });
        setError(false);
        setLoading(true);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        //get directors only
        const directors = credits.crew.filter((member) => member.job === 'Director');

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    const sessionState = isPersistatedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
