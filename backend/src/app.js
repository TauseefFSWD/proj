const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const reviewRoutes = require("./routes/reviewRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
