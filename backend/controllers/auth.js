const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const { username, password } = req.body;

    // Temp: Haardcoded user for testing
    const validUser = "pranav";
    const validPass = "pranav";

    if (username != validUser || password !== validPass) {
        return res.status(401).json({ message: "Incorrect username or password" });
    }

    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return res.json({
        message: "Login successful",
        token,
    });
}