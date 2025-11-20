const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const validUser = "pranav";

    if (username !== validUser || password !== validUser) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRES }
    );
    return res.json({ token });
});

module.exports = router;