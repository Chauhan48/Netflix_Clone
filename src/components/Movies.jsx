import React, {useEffect, useState} from 'react';
import Header from './Header';
import {API_OPTIONS} from '../utils/constants';
import MovieCard from './MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          API_OPTIONS
        );
        const json = await result.json();
        setMovies(json.results);
      } catch (error) {
        console.error('Failed to fetch Movies:', error);
      }
    })();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-24">
      <Header />
      <div className="px-6 py-4 w-full">
        {movies && (
          <div className="flex flex-wrap justify-center gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
