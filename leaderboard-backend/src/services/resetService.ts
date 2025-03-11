import redis from '../config/redis';

export const resetLeaderboard = async () => {
  try {
    await redis.multi()
      .del('leaderboard')
      .del('weekly_winners')
      .set('prize_pool', '0')
      .exec();

    return 'Leaderboard reset successfully';
  } catch (error) {
    console.error('❌ Error resetting leaderboard:', error);
    throw error;
  }
};
