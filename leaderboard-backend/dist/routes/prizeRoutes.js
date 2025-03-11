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
const prizeService_1 = require("../services/prizeService");
const db_1 = __importDefault(require("../config/db"));
const router = express_1.default.Router();
// 🏆 Ödülleri dağıtan API
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, prizeService_1.distributePrizes)();
        res.json({ message: 'Prizes distributed successfully!' });
    }
    catch (error) {
        console.error("❌ Error distributing prizes:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get('/winners', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield db_1.default.query(`
            SELECT id, name, money FROM players 
            ORDER BY money DESC 
            LIMIT 3;  -- Sadece ilk 3 oyuncuyu getiriyoruz!
        `);
        const winnersWithRank = rows.map((player, index) => (Object.assign(Object.assign({}, player), { rank: index + 1 })));
        res.json(winnersWithRank);
    }
    catch (error) {
        console.error("❌ Error fetching winners:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
