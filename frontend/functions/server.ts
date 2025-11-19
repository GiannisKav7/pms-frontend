const functions = require("firebase-functions");
const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(express.json());

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// Test API Route
app.get("/leases", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM lease");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
});

// Export Firebase Function
exports.api = functions.https.onRequest(app);
