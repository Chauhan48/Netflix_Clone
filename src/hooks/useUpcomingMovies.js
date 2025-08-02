import {API_OPTIONS} from '../utils/constants';
import {useDispatch} from 'react-redux';
import {addUpcomingMovies} from '../utils/movieSlice';
import {useEffect} from 'react';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );
      const json = await data.json();

      if (json.results) {
        dispatch(addUpcomingMovies(json.results));
      } else {
        console.error('No results found in upcoming movies response');
      }
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
