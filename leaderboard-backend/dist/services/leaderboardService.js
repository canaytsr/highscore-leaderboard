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
exports.updateLeaderboard = exports.getLeaderboard = void 0;
const db_1 = __importDefault(require("../config/db"));
const redis_1 = __importDefault(require("../config/redis"));
const getLeaderboard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield redis_1.default.del('leaderboard');
        const { rows } = yield db_1.default.query(`
            SELECT 
                p.id, 
                COALESCE(CONCAT(p.name, ' ', p.surname), 'Unknown Player') AS name,
                p.money, 
                c.name AS country, 
                COALESCE(c.code, '') AS country_code
            FROM players p 
            LEFT JOIN country c ON p.countryid = c.id 
            ORDER BY p.money DESC 
            LIMIT 100;
        `);
        yield redis_1.default.setex('leaderboard', 10, JSON.stringify(rows));
        return rows;
    }
    catch (error) {
        console.error('❌ Error fetching leaderboard:', error);
        throw error;
    }
});
exports.getLeaderboard = getLeaderboard;
const updateLeaderboard = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query(`
        SELECT id, money FROM players ORDER BY money DESC LIMIT 100;
    `);
    if (!rows.length) {
        return;
    }
    yield redis_1.default.del('game_leaderboard');
    yield redis_1.default.del('leaderboard');
    for (const player of rows) {
        yield redis_1.default.zadd('leaderboard', player.money, player.id.toString());
    }
});
exports.updateLeaderboard = updateLeaderboard;
