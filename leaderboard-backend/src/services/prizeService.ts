import pool from '../config/db';
import redis from '../config/redis';
import { getLeaderboard } from './leaderboardService';

export const distributePrizes = async () => {
  try {
     
      const leaderboard = await redis.zrevrange('leaderboard', 0, 99, 'WITHSCORES');
      if (!leaderboard.length) throw new Error("❌ Leaderboard boş!");

      const totalPrizePool = 10000;
      const top3PrizeShare = [0.4, 0.3, 0.2]; 
      const remainingPrize = totalPrizePool * 0.1;

      for (let i = 0; i < 3; i++) {
          const playerId = leaderboard[i * 2];
          const prize = totalPrizePool * top3PrizeShare[i];
         
          const result = await pool.query('UPDATE players SET money = money + $1 WHERE id = $2 RETURNING *', [prize, playerId]);
      }

      const remainingPlayers = leaderboard.length / 2 - 3;
      if (remainingPlayers > 0) {
          const prizePerPlayer = remainingPrize / remainingPlayers;
          for (let i = 3; i < leaderboard.length / 2; i++) {
              const playerId = leaderboard[i * 2];

              await pool.query('UPDATE players SET money = money + $1 WHERE id = $2', [prizePerPlayer, playerId]);
          }
      }

  } catch (error) {
      console.error('❌ Ödül dağıtımında hata:', error);
      throw error;
  }
};


