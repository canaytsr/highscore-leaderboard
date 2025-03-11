import express, { Request, Response } from 'express';
//import { resetLeaderboard } from '../services/resetService';
import pool from '../config/db';
import redis from '../config/redis';

const router = express.Router();

// router.post('/reset', async (req: Request, res: Response) => {
//   try {
//     const result = await resetLeaderboard();
//     res.json(result);
//   } catch (error) {
//     console.error('Error resetting leaderboard:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// 🎯 Skor Güncelleme API
router.post('/updateScore', async (req: Request, res: Response): Promise<void> => {
  try {
      const { playerId, amount } = req.body;

      console.log("🔹 Gelen veri:", req.body); // Gelen isteği logla

      if (!playerId || amount === undefined) {
          console.log("❌ Hata: Eksik parametreler!", { playerId, amount });
          res.status(400).json({ error: "playerId ve amount gereklidir." });
          return;
      }

      // 1️⃣ PostgreSQL'de oyuncunun parasını güncelle
      const updateResult = await pool.query('UPDATE players SET money = money + $1 WHERE id = $2 RETURNING *', [amount, playerId]);
      
      if (updateResult.rowCount === 0) {
          console.log("❌ Hata: Oyuncu bulunamadı!", { playerId });
          res.status(404).json({ error: "Player not found." });
          return;
      }

      console.log(`✅ Player ${playerId} skoru ${amount} arttırıldı. Yeni durum:`, updateResult.rows[0]);

      // 2️⃣ Redis'te skor güncelle
      const redisResult = await redis.zincrby('leaderboard', amount, playerId.toString());
      console.log(`🔄 Redis güncellendi: Player ${playerId}, Yeni Skor: ${redisResult}`);

      res.status(200).json({ message: 'Score updated successfully!' });
  } catch (error) {
      console.error("❌ Error updating score:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔄 Leaderboard'u sıfırlayan API
router.post('/resetLeaderboard', async (req: Request, res: Response) => {
  try {
      console.log("📢 Leaderboard sıfırlanıyor...");

      // 1️⃣ Redis'te `leaderboard` sıfırla
      await redis.del('leaderboard');
      console.log("✅ Redis leaderboard sıfırlandı!");

      // 2️⃣ PostgreSQL'de tüm oyuncuların `money` değerini sıfırla
      await pool.query('UPDATE players SET money = 0');
      console.log("✅ PostgreSQL oyuncu skorları sıfırlandı!");

      res.json({ message: 'Leaderboard successfully reset!' });
  } catch (error) {
      console.error("❌ Error resetting leaderboard:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
