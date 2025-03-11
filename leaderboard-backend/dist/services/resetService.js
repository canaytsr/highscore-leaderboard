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
exports.resetLeaderboard = void 0;
const redis_1 = __importDefault(require("../config/redis"));
const resetLeaderboard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield redis_1.default.multi()
            .del('leaderboard')
            .del('weekly_winners')
            .set('prize_pool', '0')
            .exec();
        console.log('✅ Leaderboard reset successfully');
        return 'Leaderboard reset successfully';
    }
    catch (error) {
        console.error('❌ Error resetting leaderboard:', error);
        throw error;
    }
});
exports.resetLeaderboard = resetLeaderboard;
