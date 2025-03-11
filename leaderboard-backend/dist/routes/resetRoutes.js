"use strict";
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
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../config/db"));
const redis_1 = __importDefault(require("../config/redis"));
const router = express_1.default.Router();

router.post('/updateScore', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId, amount } = req.body;
        if (!playerId || amount === undefined) {
            res.status(400).json({ error: "playerId ve amount gereklidir." });
            return;
        }
        const updateResult = yield db_1.default.query('UPDATE players SET money = money + $1 WHERE id = $2 RETURNING *', [amount, playerId]);
        if (updateResult.rowCount === 0) {
            res.status(404).json({ error: "Player not found." });
            return;
        }
        const redisResult = yield redis_1.default.zincrby('leaderboard', amount, playerId.toString());
        res.status(200).json({ message: 'Score updated successfully!' });
    }
    catch (error) {
        console.error("❌ Error updating score:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post('/resetLeaderboard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield redis_1.default.del('leaderboard');
        yield db_1.default.query('UPDATE players SET money = 0');
        res.json({ message: 'Leaderboard successfully reset!' });
    }
    catch (error) {
        console.error("❌ Error resetting leaderboard:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
