const path = require('path');

const generate = require(path.join(__dirname, 'generate.js'));
const ensure = require(path.join(__dirname, 'ensure.js'));
const authenticate = require(path.join(__dirname, 'authenticate.js'));

module.exports = {
  generate,
  ensure,
  authenticate,
};
