import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import leaderboardRoutes from './routes/leaderboardRoutes';
import prizeRoutes from './routes/prizeRoutes';
import resetRoutes from './routes/resetRoutes';
import { updateLeaderboard } from './services/leaderboardService';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); 
app.use('/leaderboard', leaderboardRoutes);
app.use('/distributePrizes', prizeRoutes);
app.use('/reset', resetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`✅ Server running on port ${PORT}`);
    await updateLeaderboard(); 
});
