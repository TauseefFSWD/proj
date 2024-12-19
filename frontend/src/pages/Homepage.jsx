import React, { useEffect, useState } from "react";
import ReviewList from "../components/ReviewList";

function HomePage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1>Google Reviews</h1>
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default HomePage;
