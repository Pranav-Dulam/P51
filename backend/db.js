const mysql = require("mysql2");

// Use same config for Mac + DigitalOcean
const pool = mysql.createPool({
  host: "localhost",
  user: "p51user",
  password: "123",            // NO PASSWORD ANYWHERE
  database: "genai_projects",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();