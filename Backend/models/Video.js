const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	title: { type: String, required: true },
	description: { type: String },
	tags: [String],
	fileUrl: { type: String, required: true },
	fileSize: { type: Number, required: true },
	duration: { type: Number },
	uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Video", videoSchema);
