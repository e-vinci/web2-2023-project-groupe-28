const pocketBase = require('pocketbase/cjs');

const pb = new pocketBase('https://battleships.hop.sh');

async function victory(user){
    let idUser = await pb.collection('users').getFirstListItem(`username="${user.username}"`);
    let userStat = await pb.collection('leaderboard').getFirstListItem(`user="${idUser.id}"`);

    const record = await pb.collection('leaderboard').update(userStat.id, {
        score: userStat.score += 2,
        victoryNumber: userStat.victoryNumber += 1
    });
    return record;
}

async function defeat(user){
    let idUser = await pb.collection('users').getFirstListItem(`username="${user.username}"`);
    let userStat = await pb.collection('leaderboard').getFirstListItem(`user="${idUser.id}"`);

    const record = await pb.collection('leaderboard').update(userStat.id, {
        score: userStat.score == 0 ? userStat.score : userStat.score -= 1,
        defeatNumber: userStat.defeatNumber += 1
    });
    return record;
}

module.exports = {
    victory,
    defeat
  };
