import React, { useState } from 'react'
import axios from 'axios';

function TestFormReview(props) {

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const rating = e.target.rating.value;
    const review = e.target.review.value;

    try {
      await axios.post("/api/reviews", {
        tmdb_id: 1234,
        media_type: "movie",
        rating: rating,
        review: review
      });
    } catch(err) {
      setErrorMessage(err);
    }
  }

  return (
    <section className="text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Create Review</h1>
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show p-1" role="alert">
            {errorMessage}
            <button type="button" className="btn-close p-2" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrorMessage("")}></button>
          </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="rating">Rating</label>
                <input type="text" id="rating" className="form-control" required />
              </div>
              <div className="col">
                <label htmlFor="review">Review</label>
                <input type="text" id="review" className="form-control" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default TestFormReview