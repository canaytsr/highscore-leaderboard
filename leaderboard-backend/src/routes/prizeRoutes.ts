import express from 'express';
import { distributePrizes } from '../services/prizeService';
import pool from '../config/db';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        await distributePrizes();
        res.json({ message: 'Prizes distributed successfully!' });
    } catch (error) {
        console.error("❌ Error distributing prizes:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/winners', async (req, res) => {
    try {
        const { rows } = await pool.query(`
            SELECT id, name, money FROM players 
            ORDER BY money DESC 
            LIMIT 3;  -- Sadece ilk 3 oyuncuyu getiriyoruz!
        `);

        const winnersWithRank = rows.map((player, index) => ({
            ...player,
            rank: index + 1,
        }));

        res.json(winnersWithRank);
    } catch (error) {
        console.error("❌ Error fetching winners:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
