const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");

// GET Summary Chart Data
router.get("/summary", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM chart_summary");
    res.json(rows);
  } catch (err) {
    console.error("Summary chart DB error:", err);
    res.status(500).json({ error: "Database error loading summary chart" });
  }
});

// GET Reports Chart Data
router.get("/reports", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM chart_reports");
    res.json(rows);
  } catch (err) {
    console.error("Reports chart DB error:", err);
    res.status(500).json({ error: "Database error loading reports chart" });
  }
});

module.exports = router;
