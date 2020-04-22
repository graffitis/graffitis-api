const path = require('path');

const crud = require(path.join(__dirname, 'crud'));
const auth = require(path.join(__dirname, 'auth'));

module.exports = {
  crud,
  auth,
};
