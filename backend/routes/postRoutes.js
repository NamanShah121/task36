const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
require("../models/User");

// create post
router.post("/", async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const saved = await newPost.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// get posts with user info
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().populate("user");
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
