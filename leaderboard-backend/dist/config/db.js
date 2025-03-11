"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
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
exports.default = pool;
