const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const validUser = "pranav";

    if (username.trim() !== validUser || password.trim() !== validUser) {
        return res.status(401).json({
            success: false,
            error: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRES }
    );
    return res.status(200).json({
        success: true,
        token
    });
});

module.exports = router;