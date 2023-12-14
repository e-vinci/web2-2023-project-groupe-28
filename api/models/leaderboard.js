const pocketBase = require('pocketbase/cjs');

const pb = new pocketBase('https://battleships.hop.sh');

async function victory(user){
    console.log("Florin");
    console.log(user);
    console.log(user.record.id);

    /*const userStat = await pb.collection('leaderboard').getFullList({
        filter: `user = "${user.record.email}"`,
    });*/

    let userStat = await pb.collection('leaderboard').getFirstListItem(`user.id="${user.record.id}"`);
    console.log(userStat);
    const record = await pb.collection('leaderboard').update(userStat.id, {
        score: userStat.score += 2,
        victoryNumber: userStat.victoryNumber += 1
    });
    console.log(record);
    return record;
}

async function defeat(user){
    console.log("Florin");
    console.log(user);
    console.log(user.record.id);

    /*const userStat = await pb.collection('leaderboard').getFullList({
        filter: `user = "${user.record.email}"`,
    });*/

    let userStat = await pb.collection('leaderboard').getFirstListItem(`user.id="${user.record.id}"`);
    console.log(userStat);

    const record = await pb.collection('leaderboard').update(userStat.id, {
        score: userStat.score == 0 ? userStat.score : userStat.score -= 1,
        defeatNumber: userStat.defeatNumber += 1
    });
    console.log(record);
    return record;
}

module.exports = {
    victory,
    defeat
  };
