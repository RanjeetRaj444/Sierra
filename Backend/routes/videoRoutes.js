const express = require("express");
const multer = require("multer");
const Video = require("../models/Video");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
	destination: "./uploads/",
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname);
	},
});
const upload = multer({ storage });

// Upload Video
router.post(
	"/upload",
	authMiddleware,
	upload.single("video"),
	async (req, res) => {
		try {
			const { title, description, tags } = req.body;
			const video = new Video({
				userId: req.user.userId,
				title,
				description,
				tags: tags.split(","),
				fileUrl: req.file.path,
				fileSize: req.file.size,
				uploadedAt: new Date(),
			});

			await video.save();
			res.status(201).json({ message: "Video uploaded successfully" });
		} catch (error) {
			res.status(500).json({ error: "Error uploading video" });
		}
	},
);

// Get User's Videos with Pagination & Filtering
router.get("/", authMiddleware, async (req, res) => {
	try {
		const { title, tags, page = 1, limit = 10 } = req.query;
		const filter = { userId: req.user.userId };
		if (title) filter.title = new RegExp(title, "i");
		if (tags) filter.tags = { $in: tags.split(",") };

		const videos = await Video.find(filter)
			.sort({ uploadedAt: -1 })
			.skip((page - 1) * limit)
			.limit(Number(limit));

		res.json(videos);
	} catch (error) {
		res.status(500).json({ error: "Error fetching videos" });
	}
});

router.delete("/:id", authMiddleware, async (req, res) => {
	try {
		await Video.findByIdAndDelete(req.params.id);
		res.json({ message: "Video deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: "Server error" });
	}
});

router.patch("/:id", authMiddleware, async (req, res) => {
	try {
		const { title, description } = req.body;
		const updatedVideo = await Video.findByIdAndUpdate(
			req.params.id,
			{ title, description },
			{ new: true },
		);
		res.json(updatedVideo);
	} catch (err) {
		res.status(500).json({ error: "Server error" });
	}
});

module.exports = router;
