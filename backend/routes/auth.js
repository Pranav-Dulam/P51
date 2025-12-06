const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../db"); // MySQL connection

// Create account
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    try {
        const hashed = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        await db.query(sql, [username, hashed]);

        return res.status(200).json({ message: "Account created successfully" });
    } catch (err) {
        console.error("SIGNUP ERROR:", err); // Log full MySQL / bcrypt error
        if (err.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ error: "Username already exists" });
        }
        return res.status(500).json({ error: "Server error" });
    }
});

// Login (username + password)
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    try {
        const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [username]);

        if (rows.length === 0) {
            return res.status(400).json({ error: "Username not found" });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.TOKEN_EXPIRES }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user.id,
                username: user.username
            }
        });
    } catch (err) {
        console.error("LOGIN ERROR:", err); // Log full DB / bcrypt / JWT issues
        return res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;