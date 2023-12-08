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

module.exports = {
  getUsers,
};
