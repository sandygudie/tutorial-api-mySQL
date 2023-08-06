require("dotenv").config({ path: ".env.local" });
const mysql = require("mysql2");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Verify that the database is connected successfully
connection.connect((error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("The database is successfully connected.");
});

module.exports = connection;
