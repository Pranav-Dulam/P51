const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/auth");

// =========================
// SUMMARY CHART
// =========================
router.get("/summary", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM chart_reports2");

    const formatted = rows.map(r => ({
      name: r.model || r.name,
      value: r.usage || r.efficiency || r.cost || r.value || 0
    }));

    return res.json({ success: true, data: formatted });
  } catch (err) {
    console.error("SUMMARY ERROR:", err);
    return res.status(500).json({ success: false, error: "Summary chart failed" });
  }
});

// =========================
// REPORTS (GLOBAL)
// =========================
router.get("/reports", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM chart_reports2");

    const formatted = rows.map(r => ({
      name: r.model || r.name,
      value: r.usage || r.efficiency || r.cost || r.value || 0
    }));

    return res.json({ success: true, data: formatted });
  } catch (err) {
    console.error("REPORTS ERROR:", err);
    return res.status(500).json({ success: false, error: "Reports chart failed" });
  }
});

// =========================
// ADOPTION CHART
// Table: genaiadoption
// Columns: id, name, usage
// =========================
router.get("/reports/adoption", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT name, usage FROM genaiadoption");

    const formatted = rows.map(r => ({
      name: r.name,
      value: r.usage
    }));

    return res.json({ success: true, data: formatted });
  } catch (err) {
    console.error("ADOPTION ERROR:", err);
    return res.status(500).json({ success: false, error: "Adoption chart failed" });
  }
});

// =========================
// EFFICIENCY CHART
// Table: modelefficiency
// Columns: id, model, efficiency
// =========================
router.get("/reports/efficiency", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT model, efficiency FROM modelefficiency");

    const formatted = rows.map(r => ({
      name: r.model,
      value: r.efficiency
    }));

    return res.json({ success: true, data: formatted });
  } catch (err) {
    console.error("EFFICIENCY ERROR:", err);
    return res.status(500).json({ success: false, error: "Efficiency chart failed" });
  }
});

// =========================
// COST CHART
// Table: modelcost
// Columns: id, model, cost
// =========================
router.get("/reports/cost", auth, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT model, cost FROM modelcost");

    const formatted = rows.map(r => ({
      name: r.model,
      value: r.cost
    }));

    return res.json({ success: true, data: formatted });
  } catch (err) {
    console.error("COST ERROR:", err);
    return res.status(500).json({ success: false, error: "Cost chart failed" });
  }
});

module.exports = router;
