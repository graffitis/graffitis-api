const path = require('path');

const keys = require(path.join(__dirname, 'keys.json'));
const config = require(path.join(__dirname, 'config.json'));

config.PORT = process.env.PORT || config.PORT;

module.exports = {
  keys,
  config,
};
