/* eslint-disable import/no-unresolved */
const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('https://battleships.hop.sh');

// const { getCurrentUser } = require('./users');
const { getUserFromUsername } = require('./users');

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
  
  const idUser = await getUserFromUsername(username);
  const dataGame = await pb.collection('leaderboard').getFirstListItem(`user="${idUser.id}"`);

  return dataGame;
}


module.exports = {
  updateUserInfo,
  getDataGame,
};