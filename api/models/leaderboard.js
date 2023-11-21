const pocketBase = require('pocketbase/cjs');

const pb = new pocketBase('https://battleships.hop.sh');

async function victory(user){
    const userStat = await pb.collection('leaderboard').getFullList({
    filter: `user = "${user}"`,
});

    const record = await pb.collection('leaderboard').update(userStat[0].id, {
        score: userStat[0].score += 2,
        victoryNumber: userStat[0].victoryNumber += 1
    });
}

async function defeat(user){
    const userStat = await pb.collection('leaderboard').getFullList({
        filter: `user = "${user}"`,
    });

    const record = await pb.collection('leaderboard').update(userStat[0].id, {
        score: userStat[0].score -= 1,
        defeatNumber: userStat[0].defeatNumber += 1
    });
}

module.exports = {
    victory,
    defeat
  };
