const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() =>
		app.listen(5000, () => console.log("Server running on port 5000")),
	)
	.catch((error) => console.error("MongoDB connection error:", error));
