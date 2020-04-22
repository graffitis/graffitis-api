const path = require('path');

const crud = require(path.join(__dirname, 'crud'));
const auth = require(path.join(__dirname, 'auth'));
const me = require(path.join(__dirname, 'me.js'));

module.exports = {
  crud,
  auth,
  me,
};
