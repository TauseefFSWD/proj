import React from "react";

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.reviewer}</h3>
          <p>{review.comment}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
