import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || "dbusername",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "dbname",
    password: process.env.DB_PASSWORD || "password",
    port: Number(process.env.DB_PORT) || 5432,
});

pool.on('connect', () => {
    console.log('✅ PostgreSQL Connected Successfully');
  });
  
  pool.on('error', (err) => {
    console.error('❌ PostgreSQL Error:', err);
  });

export default pool;
