const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/auth");

// GET Summary Chart Data
router.get("/summary", auth, async (req, res) => {
  try {
    if (!req.user) {
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
    if (!req.user) {
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

// GET GenAI Adoption Chart Data (chart_reports2)
router.get("/reports/adoption", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized request" });
    }

    const [rows] = await db.query("SELECT * FROM chart_reports2");

    const formatted = rows.map(r => ({
      name: r.name,
      value: r.videos
    }));

    return res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    console.error("Adoption chart DB error:", err);
    return res.status(500).json({
      success: false,
      error: "Database error loading adoption chart",
    });
  }
});

// GET Model Efficiency Chart Data (efficiency)
router.get("/reports/efficiency", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized request" });
    }

    const [rows] = await db.query("SELECT * FROM efficiency");

    const formatted = rows.map(r => ({
      name: r.name,
      value: r.videos
    }));

    return res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    console.error("Efficiency chart DB error:", err);
    return res.status(500).json({
      success: false,
      error: "Database error loading efficiency chart",
    });
  }
});

// GET Cost Reduction Chart Data (cost)
router.get("/reports/cost", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized request" });
    }

    const [rows] = await db.query("SELECT * FROM cost");

    const formatted = rows.map(r => ({
      name: r.name,
      value: r.videos
    }));

    return res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    console.error("Cost chart DB error:", err);
    return res.status(500).json({
      success: false,
      error: "Database error loading cost chart",
    });
  }
});

module.exports = router;
