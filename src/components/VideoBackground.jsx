import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({ movieId }) => {

    const [trailerId, setTrailerId] = useState(null);

    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerId(trailer.key);
    };

    useEffect(() => {
        getMovieTrailer();
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
            <iframe
                className="w-full h-full absolute top-0 left-0"
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailerId}&playsinline=1&enablejsapi=1`}
                title="Netflix Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-50 z-10" />
        </div>
    )
}

export default VideoBackground
