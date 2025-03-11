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
exports.getLeaderboard = exports.updatePlayerScore = void 0;
const redis_1 = __importDefault(require("./redis"));
const db_1 = __importDefault(require("./db")); // PostgreSQL bağlantısı
const LEADERBOARD_KEY = "leaderboard"; // Redis key
// Oyuncunun parasını güncelle ve Redis sıralamasına ekle
const updatePlayerScore = (playerId, money) => __awaiter(void 0, void 0, void 0, function* () {
    yield redis_1.default.zincrby(LEADERBOARD_KEY, money, playerId.toString());
});
exports.updatePlayerScore = updatePlayerScore;
// Redis'ten liderlik tablosunu getir
const getLeaderboard = () => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield redis_1.default.zrevrange(LEADERBOARD_KEY, 0, 99, "WITHSCORES");
    let leaderboard = [];
    for (let i = 0; i < players.length; i += 2) {
        const playerId = parseInt(players[i]);
        const money = parseInt(players[i + 1]);
        // PostgreSQL’den oyuncu bilgilerini al
        const result = yield db_1.default.query("SELECT name, country FROM players WHERE id = $1", [playerId]);
        if (result.rows.length > 0) {
            leaderboard.push({
                playerId,
                name: result.rows[0].name,
                country: result.rows[0].country,
                money
            });
        }
    }
    return leaderboard;
});
exports.getLeaderboard = getLeaderboard;
