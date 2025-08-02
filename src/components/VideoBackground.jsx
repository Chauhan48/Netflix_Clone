import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {API_OPTIONS} from '../utils/constants';

const VideoBackground = ({movieId}) => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
    <div className="overflow-hidden h-screen">
      <iframe
        className="w-full h-[140%] transform -translate-y-60"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailerId}&playsinline=1&enablejsapi=1`}
        title="Netflix Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VideoBackground;
