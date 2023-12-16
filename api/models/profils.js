const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('https://battleships.hop.sh');

// const { getCurrentUser } = require('./users');
// const { getUserFromEmail } = require('./users');

// function to update user data with is email
/* eslint-disable */
async function updateUserInfo(id, username) {
  console.log('in fct updateUserInfo');
  try {

    const data = {
      username,
    }

    // Mettre à jour les données de l'utilisateur trouvé
    const updatedRecord = await pb.collection('users').update(id, data);
    console.log(updatedRecord);
    return updatedRecord;
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error);
    return undefined;
  }
}

async function getDataGame(username) {
  
  const idUser = await pb.collection('users').getFirstListItem(`username="${username}"`);
  console.log('idUser:');
  console.log(idUser);
  const dataGame = await pb.collection('leaderboard').getFirstListItem(`user="${idUser.id}"`);
  console.log('dataGame:');
  console.log(dataGame);
  return dataGame;
}


module.exports = {
  updateUserInfo,
  getDataGame,
};