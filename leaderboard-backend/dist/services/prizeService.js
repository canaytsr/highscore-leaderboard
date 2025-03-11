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
        // Redis ve PostgreSQL'den leaderboard çek
        const leaderboard = yield redis_1.default.zrevrange('leaderboard', 0, 99, 'WITHSCORES');
        if (!leaderboard.length)
            throw new Error("❌ Leaderboard boş!");
        console.log("🎯 Leaderboard verisi alındı:", leaderboard);
        const totalPrizePool = 10000;
        const top3PrizeShare = [0.4, 0.3, 0.2];
        const remainingPrize = totalPrizePool * 0.1;
        // İlk 3 oyuncuya ödül dağıt
        for (let i = 0; i < 3; i++) {
            const playerId = leaderboard[i * 2];
            const prize = totalPrizePool * top3PrizeShare[i];
            console.log(`🔹 Player ${playerId} ödül kazanıyor: $${prize}`);
            const result = yield db_1.default.query('UPDATE players SET money = money + $1 WHERE id = $2 RETURNING *', [prize, playerId]);
            console.log("✅ Güncellenen oyuncu:", result.rows);
        }
        // 4-100 arası oyunculara ödül dağıt
        const remainingPlayers = leaderboard.length / 2 - 3;
        if (remainingPlayers > 0) {
            const prizePerPlayer = remainingPrize / remainingPlayers;
            for (let i = 3; i < leaderboard.length / 2; i++) {
                const playerId = leaderboard[i * 2];
                console.log(`💰 Player ${playerId} ödül kazanıyor: $${prizePerPlayer}`);
                yield db_1.default.query('UPDATE players SET money = money + $1 WHERE id = $2', [prizePerPlayer, playerId]);
            }
        }
        console.log("✅ Ödüller başarıyla dağıtıldı!");
    }
    catch (error) {
        console.error('❌ Ödül dağıtımında hata:', error);
        throw error;
    }
});
exports.distributePrizes = distributePrizes;
