const mysql = require("mysql2");

// Use same config for Mac + DigitalOcean
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1", // force IPv4 to avoid ::1 MySQL issues
  port: 3306, // ensure MySQL IPv4 port
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();