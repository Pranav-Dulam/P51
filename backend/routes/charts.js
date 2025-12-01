const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/auth");

// GET Summary Chart Data
router.get("/summary", auth, async (req, res) => {
  try {
    if (!req.user || !req.user.username) {
      return res.status(401).json({ error: "Unauthorized request" });
    }
    const [rows] = await db.query("SELECT * FROM chart_summary");
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.error("Summary chart DB error:", err);
    return res.status(500).json({
      success: false,
      error: "Database error loading summary chart",
    });
  }
});

// GET Reports Chart Data
router.get("/reports", auth, async (req, res) => {
  try {
    if (!req.user || !req.user.username) {
      return res.status(401).json({ error: "Unauthorized request" });
    }
    const [rows] = await db.query("SELECT * FROM chart_reports");
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.error("Reports chart DB error:", err);
    return res.status(500).json({
      success: false,
      error: "Database error loading reports chart",
    });
  }
});


module.exports = router;
