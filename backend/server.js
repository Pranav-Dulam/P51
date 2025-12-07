require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const chartRoutes = require("./routes/charts");
const statsRoutes = require("./routes/stats");
const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    next();
});

// Middlewares
app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://137.184.40.86" // updated production frontend (NGINX on port 80)
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Health check
app.get("/api/health", (req, res) => {
    res.json({ status: `Backend running on port ${PORT}` });
});

// Auth routes
app.use("/api/auth", authRoutes);

//Chart routes
app.use("/api/charts", chartRoutes);

// Stats route
app.use("/api/stats", statsRoutes);

app.use((err, req, res, next) => {
    console.error("Global Error:", err.stack);
    res.status(500).json({
        success: false,
        error: "Internal server error",
    });
});

if (!process.env.JWT_SECRET) {
    console.error("❌ FATAL: JWT_SECRET is missing from .env — backend cannot start without it.");
    process.exit(1);
}

// Start server
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
