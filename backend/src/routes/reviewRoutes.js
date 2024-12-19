const express = require("express");
const {
  getReviews,
  respondToReview,
} = require("../controllers/reviewController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getReviews);
router.post("/respond", authMiddleware, respondToReview);

module.exports = router;
