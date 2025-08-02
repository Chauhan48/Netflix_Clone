import React from 'react';
import PropTypes from 'prop-types';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute top-[30%] left-12 text-white max-w-xl space-y-4 z-20">
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>

      <p className="text-sm md:text-lg font-medium text-gray-200 drop-shadow-md line-clamp-3">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-opacity-80 transition">
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-60 text-white px-6 py-2 rounded hover:bg-opacity-80 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default VideoTitle;
