const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/users-count", async (req, res) => {
    try{
        const [rows] = await db.query("SELECT COUNT(*) AS count FROM users");
        res.json({ count: rows[0].count });
    } catch (err) {
        res.json({ count: 0 });
    }
});

module.exports = router;