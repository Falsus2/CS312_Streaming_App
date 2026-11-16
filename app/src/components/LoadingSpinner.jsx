import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <div>
        <h3>Loading...</h3>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
}

export default LoadingSpinner;