exports.getReviews = (req, res) => {
  const reviews = [
    { id: 1, reviewer: "John Doe", comment: "Great service!", rating: 5 },
    { id: 2, reviewer: "Jane Smith", comment: "Okay experience.", rating: 3 },
  ];
  res.json(reviews);
};

exports.respondToReview = (req, res) => {
  const { reviewId, response } = req.body;
  res.json({ message: `Responded to review ${reviewId}: ${response}` });
};
