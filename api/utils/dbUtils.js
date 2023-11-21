/* eslint-disable import/no-unresolved */
const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('https://battleships.hop.sh');

async function getUsers() {
  const listUsers = [];

  try {
    const userObject = await pb.collection('users').getFullList({
      sort: '+username',
    });
    userObject.forEach((user) => {
      listUsers.push(user.username);
    });
  } catch (error) {
    return error;
  }

  return listUsers;
}

async function getUsernameFromEmail(email) {
  const userObject = await pb.collection('users').getFullList({
    // eslint-disable-next-line object-shorthand
    filters: { email: email }, // filtrer par email
  });

  if (userObject.length > 0) {
    return userObject[0].username;
  }
  return undefined; // Aucun utilisateur trouvé avec cet email
}

module.exports = {
  getUsernameFromEmail,
  getUsers,
};
