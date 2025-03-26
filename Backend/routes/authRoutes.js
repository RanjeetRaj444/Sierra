const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/redister", async (req, res) => {
	try {
		const { username, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ username, password: hashedPassword });
		await user.save();
		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(401).json({ message: "Invalid username or password" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid username or password" });
		}
		const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
			expiresIn: "1h",
		});
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
