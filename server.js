const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server started on port 5000")))
  .catch((err) => console.error(err));
