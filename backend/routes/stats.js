const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/auth");

router.get("/users-count", auth, async (req, res) => {
    if (!req.user || !req.user.username) {
        return res.status(401).json({ success: false, error: "Unauthorized request" });
    }
    try{
        const [rows] = await db.query("SELECT COUNT(*) AS count FROM users");
        return res.status(200).json({
            success: true,
            count: rows[0].count
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Database error loading user count",
            count: 0
        });
    }
});

module.exports = router;