import express, { Request, Response } from 'express';
import pool from '../config/db';
import redis from '../config/redis';

const router = express.Router();

router.post('/updateScore', async (req: Request, res: Response): Promise<void> => {
  try {
      const { playerId, amount } = req.body;

      if (!playerId || amount === undefined) {
          res.status(400).json({ error: "playerId ve amount gereklidir." });
          return;
      }

      const updateResult = await pool.query('UPDATE players SET money = money + $1 WHERE id = $2 RETURNING *', [amount, playerId]);
      
      if (updateResult.rowCount === 0) {
          res.status(404).json({ error: "Player not found." });
          return;
      }

      const redisResult = await redis.zincrby('leaderboard', amount, playerId.toString());

      res.status(200).json({ message: 'Score updated successfully!' });
  } catch (error) {
      console.error("❌ Error updating score:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/resetLeaderboard', async (req: Request, res: Response) => {
  try {
      console.log("📢 Leaderboard sıfırlanıyor...");

      await redis.del('leaderboard');

      await pool.query('UPDATE players SET money = 0');

      res.json({ message: 'Leaderboard successfully reset!' });
  } catch (error) {
      console.error("❌ Error resetting leaderboard:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
