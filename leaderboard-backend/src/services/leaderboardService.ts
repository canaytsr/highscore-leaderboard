import pool from '../config/db';
import redis from '../config/redis';

export const getLeaderboard = async () => {
    try {

        const redisType = await redis.type('leaderboard');

        if (redisType === 'zset') {
            const redisLeaderboard = await redis.zrevrange('leaderboard', 0, 99, 'WITHSCORES');

            const formattedLeaderboard = [];
            for (let i = 0; i < redisLeaderboard.length; i += 2) {
                const playerId = redisLeaderboard[i];
                const money = parseFloat(redisLeaderboard[i + 1]);

                const playerDetails = await redis.hgetall(`player:${playerId}`);

                formattedLeaderboard.push({
                    id: playerId,
                    money: money,
                    name: playerDetails.name || "Unknown",
                    surname: playerDetails.surname || "",
                    username: playerDetails.username || "",
                    country_code: playerDetails.country_code || "",
                    country_name: playerDetails.country_name || "",

                });
            }

            return formattedLeaderboard;
        }


        const { rows } = await pool.query(`
            SELECT 
                p.id, 
                COALESCE(p.name, 'Unknown') AS name,
                COALESCE(p.surname, '') AS surname,
                COALESCE(p.username, '') AS username,
                COALESCE(c.code, '') AS country_code,
                COALESCE(c.name, 'Unknown Country') AS country_name,
                COALESCE(p.money, 0) AS money
            FROM players p
            LEFT JOIN country c ON p.countryid = c.id
            ORDER BY money DESC 
            LIMIT 100;
        `);

        if (!rows.length) {
            return [];
        }

        await redis.setex('leaderboard', 10, JSON.stringify(rows));

        return rows;
    } catch (error) {
        console.error('❌ Error fetching leaderboard:', error);
        throw error;
    }
};



export const updateLeaderboard = async () => {

    const { rows } = await pool.query(`
        SELECT 
            p.id, 
            COALESCE(p.name, 'Unknown') AS name,
            COALESCE(p.surname, '') AS surname,
            COALESCE(p.username, '') AS username,
            COALESCE(c.code, '') AS country_code,
            COALESCE(c.name, 'Unknown Country') AS country_name,
            COALESCE(p.money, 0) AS money
        FROM players p
        LEFT JOIN country c ON p.countryid = c.id
        ORDER BY money DESC 
        LIMIT 100;
    `);

    if (!rows.length) {
        return;
    }

    await redis.del('leaderboard'); 
    await redis.del('game_leaderboard'); 


    const pipeline = redis.pipeline();
    for (const player of rows) {
        const money = player.money || 0;
        
        pipeline.zadd('leaderboard', money, player.id.toString());

        pipeline.hset(`player:${player.id}`, {
            name: player.name,
            surname: player.surname,
            username: player.username,
            country_code: player.country_code,
            country_name: player.country_name,
            money: money
        });
    }
    await pipeline.exec();

};
