const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/db");

// SIGNUP CONTROLLER
exports.signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Check if user already exists
        const [existing] = await db.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        if (existing.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 2. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Insert new user
        await db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, hashedPassword]
        );

        return res.json({ message: "Signup successful" });
    } catch (err) {
        console.error("Signup Error:", err);
        return res.status(500).json({ message: "Signup error" });
    }
};

// LOGIN CONTROLLER
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Look up user in DB
        const [rows] = await db.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: "Incorrect username or password" });
        }

        const user = rows[0];

        // 2. Compare password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Incorrect username or password" });
        }

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.json({
            message: "Login successful",
            token,
            user: { id: user.id, username: user.username }
        });
    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ message: "Login error" });
    }
};