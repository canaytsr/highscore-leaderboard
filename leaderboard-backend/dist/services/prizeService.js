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
exports.distributePrizes = void 0;
const db_1 = __importDefault(require("../config/db"));
const redis_1 = __importDefault(require("../config/redis"));
const distributePrizes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("🏆 Ödüller dağıtılıyor...");
        const leaderboard = yield redis_1.default.zrevrange('leaderboard', 0, 99, 'WITHSCORES');
        if (!leaderboard.length)
            throw new Error("❌ Leaderboard boş!");
        const totalPrizePool = 10000;
        const top3PrizeShare = [0.4, 0.3, 0.2];
        const remainingPrize = totalPrizePool * 0.1;
        for (let i = 0; i < 3; i++) {
            const playerId = leaderboard[i * 2];
            const prize = totalPrizePool * top3PrizeShare[i];
            const result = yield db_1.default.query('UPDATE players SET money = money + $1 WHERE id = $2 RETURNING *', [prize, playerId]);
        }
        const remainingPlayers = leaderboard.length / 2 - 3;
        if (remainingPlayers > 0) {
            const prizePerPlayer = remainingPrize / remainingPlayers;
            for (let i = 3; i < leaderboard.length / 2; i++) {
                const playerId = leaderboard[i * 2];
                yield db_1.default.query('UPDATE players SET money = money + $1 WHERE id = $2', [prizePerPlayer, playerId]);
            }
        }
    }
    catch (error) {
        console.error('❌ Ödül dağıtımında hata:', error);
        throw error;
    }
});
exports.distributePrizes = distributePrizes;
