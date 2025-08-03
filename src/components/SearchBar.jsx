import React, {useRef, useState} from 'react';
import {API_OPTIONS} from '../utils/constants';
import MovieCard from './MovieCard';

const SearchBar = () => {
  const searchText = useRef(null);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchClick = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await result.json();
    setSearchResult(json.results);
  };

  return (
    <div className="bg-black h-screen flex flex-col overflow-hidden pt-20">
      <div className="sticky top-20 z-30 bg-black py-4 flex justify-center">
        <form
          className="flex bg-[#141414] rounded-full px-4 py-2 w-full max-w-xl shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder="What would you like to watch today?"
            className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-4 py-3 text-lg"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 font-semibold transition-colors duration-200 ml-2"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 w-full">
        {searchResult && (
          <div className="flex flex-wrap justify-center gap-4">
            {searchResult.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
