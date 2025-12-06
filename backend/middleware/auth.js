const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization header missing or malformed" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(403).json({ message: "Token expired" });
        }
        return res.status(403).json({ message: "Invalid or malformed token" });
    }
};