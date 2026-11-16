import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MediaCard({ media }) {
    const title = media.title || media.name;
    const releaseYear = (media.release_date || media.first_air_date)?.slice(0,4) || "N/A";
    const rating = media.vote_average;
    const posterURL = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
    
    // return (
    //     <div className="media-card">
    //         <h3>{title}</h3>
    //         {media.poster_path && (
    //             <img src={posterURL} alt={title} />
    //         )}
    //         <p>{releaseYear}</p>
    //         <p>Rating: {rating.toFixed(1)} </p>
    //     </div>

    // );
   return (
    <Card style={{ width: '18rem' }} className='mediaCard'>
      {media.poster_path && (
        <Card.Img variant="top" src={posterURL} alt={title} />
      )}
      <Card.Body className='mediaCard'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {releaseYear}
        </Card.Text>
        <Card.Text>
          {rating.toFixed(1)}
        </Card.Text>
        <Button>See More</Button>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;