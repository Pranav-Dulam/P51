require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const chartRoutes = require("./routes/charts");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "*",
}));

// Health check
app.get("/api/health", (req, res) => {
    res.json({ status: "Backend running on port 3000" });
});

// Auth routes
app.use("/api", authRoutes);

//Chart routes
app.use("/api/charts", chartRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
