const express = require("express");
const router = express.Router();
const User = require("../models/User");

// add user
router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saved = await newUser.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;