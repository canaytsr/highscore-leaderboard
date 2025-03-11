import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "leaderboard",
    password: process.env.DB_PASSWORD || "pOsw.8207Lq",
    port: Number(process.env.DB_PORT) || 5432,
});

pool.on('connect', () => {
    console.log('✅ PostgreSQL Connected Successfully');
  });
  
  pool.on('error', (err) => {
    console.error('❌ PostgreSQL Error:', err);
  });

export default pool;
