const pocketBase = require('pocketbase/cjs');
const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const pb = new pocketBase('https://battleships.hop.sh');

// const { getCurrentUser } = require('./users');
const { getUserFromEmail } = require('./users');

// function to get user Id by is email
async function getUserIdByEmail(email) {
  const user = getUserFromEmail(email);
  const userId = user.id;
  return userId;
}

// function to update user data with is email
async function updateUserInfo(email, data){
  console.log('in fct updateUserInfo');
  try{
    const userId = getUserIdByEmail(email); 
    if(!userId) return undefined;
    if(!data) return undefined;
    const record = await pb.collection('users').update(userId, data);
    return record;
  } catch (error) {
    if (error.name === 'ClientResponseError 400' && error.response && error.status === 400) {
      // Handle authentication failure
      return undefined;
    }
  }
};

module.exports = {
  updateUserInfo,
};