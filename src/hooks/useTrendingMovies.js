import {API_OPTIONS} from '../utils/constants';
import {useDispatch} from 'react-redux';
import {addTrendingMovies} from '../utils/movieSlice';
import {useEffect} from 'react';

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        API_OPTIONS
      );
      const json = await data.json();

      if (json.results) {
        dispatch(addTrendingMovies(json.results));
      } else {
        console.error('No results found in trending movies response');
      }
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
