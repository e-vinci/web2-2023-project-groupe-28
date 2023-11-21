/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
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
  const record = await pb.collection('users').getFullList({
    filter: `email = "${email}"`,
  });
  console.log(record);
  if (record.length > 0) {
    let username = record[0].username;
    console.log(username);
    return username;
  // eslint-disable-next-line no-else-return
  }
  return undefined; // Aucun utilisateur trouvé avec cet email
}

module.exports = {
  getUsernameFromEmail,
  getUsers,
};
