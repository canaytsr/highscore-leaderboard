import pool from '../config/db';
import redis from '../config/redis';

// 📌 Leaderboard'ı getir (Önce Redis, yoksa DB)
export const getLeaderboard = async () => {
    try {
        console.log("📢 Leaderboard API çağrıldı, Redis cache kontrol ediliyor...");

        const redisType = await redis.type('leaderboard');

        if (redisType === 'zset') {
            console.log("✅ Redis ZSET kullanılıyor!");
            const redisLeaderboard = await redis.zrevrange('leaderboard', 0, 99, 'WITHSCORES');

            const formattedLeaderboard = [];
            for (let i = 0; i < redisLeaderboard.length; i += 2) {
                const playerId = redisLeaderboard[i];
                const money = parseFloat(redisLeaderboard[i + 1]);

                // Oyuncunun detaylarını Redis Hash'ten al
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

        console.log("❌ Redis'te veri bulunamadı, PostgreSQL'den çekiliyor...");

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
            console.log("❌ PostgreSQL'de hiç oyuncu yok!");
            return [];
        }

        // 🔹 Redis'e güncel veriyi kaydet (10 saniye cache)
        await redis.setex('leaderboard', 10, JSON.stringify(rows));

        return rows;
    } catch (error) {
        console.error('❌ Error fetching leaderboard:', error);
        throw error;
    }
};



// 📌 Leaderboard'ı güncelle (DB -> Redis)
export const updateLeaderboard = async () => {
    console.log("📢 Redis leaderboard güncelleniyor...");

    // 🔹 PostgreSQL'den oyuncuları çek
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
        console.log("❌ PostgreSQL'de hiç oyuncu yok!");
        return;
    }

    // 🔥 Eski verileri temizle
    await redis.del('leaderboard'); // JSON cache sil
    await redis.del('game_leaderboard'); // ZSET sil

    console.log(`🔹 ${rows.length} oyuncu güncelleniyor...`);

    // 🔹 Yeni verileri Redis'e ZSET olarak ekle ve ek bilgileri hash olarak sakla
    const pipeline = redis.pipeline();
    for (const player of rows) {
        const money = player.money || 0;
        
        // Sıralama için ZSET kullan
        pipeline.zadd('leaderboard', money, player.id.toString());

        // Oyuncu bilgilerini ayrı bir HASH olarak kaydet
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

    console.log("✅ Leaderboard başarıyla güncellendi!");
};




// export const updateLeaderboard = async () => {
//     console.log("📢 Redis leaderboard güncelleniyor...");

//     // PostgreSQL'den oyuncuları çek
//     const { rows } = await pool.query(`
//         SELECT id, money FROM players ORDER BY money DESC LIMIT 100;
//     `);

//     if (!rows.length) {
//         console.log("❌ PostgreSQL'de hiç oyuncu yok!");
//         return;
//     }

//     // Redis leaderboard'u temizle
//     await redis.del('leaderboard');

//     // Yeni verileri Redis'e ekle
//     for (const player of rows) {
//         await redis.zadd('leaderboard', player.money, player.id.toString());
//     }

//     console.log("✅ Leaderboard başarıyla güncellendi!");
// };



// function formatZsetToJSON(data: string[]): { id: number; username: string; country: string; money: number }[] {
//   let result = [];
//   for (let i = 0; i < data.length; i += 2) {
//       let player = JSON.parse(data[i]) as { id: number; username: string; country: string };
//       let money = Number(data[i + 1]); // Zset'te skorlar string olarak saklandığı için sayıya çeviriyoruz
//       result.push({ ...player, money });
//   }
//   return result;
// }

