const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-[200px] transition-transform duration-300 hover:scale-110">
            <img
                src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                alt="Movie Poster"
                className="w-full h-[250px] object-cover rounded-lg shadow-lg"
            />
        </div>

    );
};

export default MovieCard;
