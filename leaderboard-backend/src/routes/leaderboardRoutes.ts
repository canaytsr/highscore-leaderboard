import express, { Request, Response } from 'express';
import { getLeaderboard } from '../services/leaderboardService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const leaderboard = await getLeaderboard();
    res.json(leaderboard);
  } catch (error) {
    console.error("❌ Leaderboard API error:", error); 
    res.status(500).json({ error: 'Internal Server Error', details: (error as Error).message });
  }
});

export default router;
