const pocketBase = require('pocketbase/cjs');
const path = require('node:path');

const pb = new pocketBase('https://battleships.hop.sh');

const { getCurrentUser } = require('./users');
// const { getUserFromEmail } = require('./users');

// function to update user data with is email
/* eslint-disable */
async function updateUserInfo(user, data) {
  console.log('in fct updateUserInfo');
  try {
    if (!user || !data || !data.email) return undefined;

    // Trouver l'utilisateur par son email
    const userRecord = await pb.collection('users').findOne({ filter: `email = "${data.email}"` });

    if (!userRecord) {
      console.log('Utilisateur non trouvé');
      return undefined;
    }

    // Mettre à jour les données de l'utilisateur trouvé
    const updatedRecord = await pb.collection('users').update({ userRecord, email: data.email });

    return updatedRecord;
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error);
    return undefined;
  }
};


module.exports = {
  updateUserInfo,
};