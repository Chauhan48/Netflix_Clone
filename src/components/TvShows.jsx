import React, {useEffect, useState} from 'react';
import Header from './Header';
import {API_OPTIONS} from '../utils/constants';
import MovieCard from './MovieCard';

const TvShows = () => {
  const [tvShows, setTvShows] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(
          'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
          API_OPTIONS
        );
        const json = await result.json();
        setTvShows(json.results);
      } catch (error) {
        console.error('Failed to fetch TV shows:', error);
      }
    })();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-24">
      <Header />
      <div className="px-6 py-4 w-full">
        {tvShows && (
          <div className="flex flex-wrap justify-center gap-4">
            {tvShows.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TvShows;
