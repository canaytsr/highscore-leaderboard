"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const redis = new ioredis_1.default({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: Number(process.env.REDIS_PORT) || 5432,
});
redis.on("connect", () => {
    console.log("✅ Redis bağlantısı başarılı!");
});
redis.on("error", (err) => {
    console.error("❌ Redis bağlantı hatası:", err);
});
exports.default = redis;
