
function MediaCard({ media }) {
    const title = media.title || media.name;
    const releaseYear = (media.release_date || media.first_air_date)?.slice(0,4) || "N/A";
    const rating = media.vote_average;
    const posterURL = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
    
    return (
        <div className="media-card">
            <h3>{title}</h3>
            {media.poster_path && (
                <img src={posterURL} alt={title} />
            )}
            <p>{releaseYear}</p>
            <p>Rating: {rating.toFixed(1)} </p>
        </div>

    );
   
}

export default MediaCard;