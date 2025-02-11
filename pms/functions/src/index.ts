import { onRequest } from "firebase-functions/v2/https";
import { Pool } from "pg";

// Load database credentials from Firebase environment config
const pool = new Pool({
    user: process.env.PGUSER || "postgres",
    host: process.env.PGHOST || "34.69.91.248",
    database: process.env.PGDATABASE || "property-management-db",
    password: process.env.PGPASSWORD || "15nST4?Lai?n9&7c",
    port: 5432, // Default PostgreSQL port
});

export const getLeases = onRequest(async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM lease");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Error fetching leases");
    }
});
