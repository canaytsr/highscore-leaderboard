"use strict";
// import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import pool from "./db";
// import redis from "./redis";
// import { 
//     updatePlayerScore, 
//     getLeaderboard, 
//     initializeLeaderboard, 
//     getWinners, 
//     distributePrizes, 
//     resetLeaderboard 
// } from "./leaderboard";
// import cron from "node-cron";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// console.log("🚀 Sunucu başlatılıyor...");
// // PostgreSQL bağlantısını kontrol et
// pool.query("SELECT 1")
//     .then(() => console.log("✅ PostgreSQL bağlantısı başarılı!"))
//     .catch(err => console.error("❌ PostgreSQL bağlantı hatası:", err));
// // Redis bağlantısını kontrol et
// redis.ping()
//     .then(response => console.log("✅ Redis bağlantısı başarılı!", response))
//     .catch(err => console.error("❌ Redis bağlantı hatası:", err));
// app.get("/", (req, res) => {
//     res.send("Leaderboard Backend is Running!");
// });
// // 🏆 Liderlik tablosunu getir
// app.get("/leaderboard", async (req, res) => {
//     try {
//         console.log("/leaderboard endpoint'i çağrıldı");
//         const leaderboard = await getLeaderboard();
//         res.json(leaderboard);
//     } catch (error) {
//         console.error("Leaderboard error:", error);
//         res.status(500).send("Error fetching leaderboard");
//     }
// });
// // 🔄 Haftalık resetleme cron job'u (Pazar günü gece 00:00'da çalışır)
// cron.schedule("0 0 * * 0", async () => {
//     console.log("🔄 Haftalık reset başlatıldı...");
//     await resetLeaderboard();
//     console.log("✅ Haftalık reset tamamlandı.");
// });
// // ✏️ Score güncelleme
// app.post("/updateScore", async (req: Request, res: Response): Promise<void> => {
//     const { playerId, score } = req.body;
//     if (!playerId || !score) {
//         res.status(400).send("Invalid request");
//         return;
//     }
//     try {
//         await updatePlayerScore(playerId, score);
//         res.send("Player score updated!");
//     } catch (error) {
//         console.error("Update score error:", error);
//         res.status(500).send("Error updating score");
//     }
// });
// // 🏅 Kazananları al
// app.get("/winners", async (req, res) => {
//     try {
//         const winners = await getWinners();
//         res.json(winners);
//     } catch (error) {
//         console.error("Kazananlar alınırken hata:", error);
//         res.status(500).send("Error fetching winners");
//     }
// });
// // 🎁 Ödülleri dağıt
// app.post("/distributePrizes", async (req, res) => {
//     try {
//         await distributePrizes();
//         res.status(200).json({ message: "Prizes distributed successfully!" });
//     } catch (error) {
//         console.error("Error distributing prizes:", error);
//         res.status(500).json({ message: "Error distributing prizes." });
//     }
// });
// // Sunucuyu başlat
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, async () => {
//     console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`);
//     await initializeLeaderboard();
//     console.log("✅ initializeLeaderboard tamamlandı.");
// });
// // 🗑️ Redis'ten weekly_winners anahtarını sil
// app.post("/resetWinners", async (req, res) => {
//     try {
//         await redis.del("weekly_winners");
//         console.log("✅ weekly_winners anahtarı Redis'ten silindi.");
//         res.status(200).json({ message: "weekly_winners başarıyla silindi!" });
//     } catch (error) {
//         console.error("❌ weekly_winners silinirken hata oluştu:", error);
//         res.status(500).json({ message: "weekly_winners silinemedi." });
//     }
// });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const leaderboardRoutes_1 = __importDefault(require("./routes/leaderboardRoutes"));
const prizeRoutes_1 = __importDefault(require("./routes/prizeRoutes"));
const resetRoutes_1 = __importDefault(require("./routes/resetRoutes"));
const leaderboardService_1 = require("./services/leaderboardService");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // CORS hatalarını önlemek için
app.use('/leaderboard', leaderboardRoutes_1.default);
app.use('/distributePrizes', prizeRoutes_1.default);
app.use('/reset', resetRoutes_1.default);
const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`✅ Server running on port ${PORT}`);
    yield (0, leaderboardService_1.updateLeaderboard)(); // Redis'te leaderboard'u güncelle
}));
