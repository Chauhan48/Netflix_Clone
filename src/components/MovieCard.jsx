import React, {useState} from 'react';
import PropTypes from 'prop-types';

MovieCard.propTypes = {
  movie: PropTypes.shape({
    vote_count: PropTypes.number,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    // add other keys you're using
  }).isRequired
};


const MovieCard = ({movie}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="w-[200px] transition-transform duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded"
        />
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Transparent background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          ></div>

          {/* Popup content */}
          <div className="relative z-50 bg-black bg-opacity-80 p-6 rounded-lg w-[90%] max-w-lg text-white shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-white text-xl"
            >
              ✖
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-sm mt-2">{movie.overview}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full">
                Release: {movie.release_date || movie.first_air_date || 'N/A'}
              </span>

              <span className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full">
                ⭐ {movie.vote_average}
              </span>
              <span className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full">
                {movie.vote_count} votes
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
