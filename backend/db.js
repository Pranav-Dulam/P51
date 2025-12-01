const mysql = require("mysql2");

const pool = mysql.createPool(({
    host: "localhost",
    user: "root",
    password: "", //empty password
    database: "genai_projects"
}));

module.exports = pool.promise();