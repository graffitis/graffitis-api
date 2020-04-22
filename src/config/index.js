const path = require('path');
const crypto = require('crypto');

const keys = require(path.join(__dirname, 'keys.json'));
const config = require(path.join(__dirname, 'config.json'));

config.PORT = process.env.PORT || config.PORT;

config.cookie = {
  maxAge: 24 * 60 * 60 * 1000,
  keys: [crypto.randomBytes(64).toString('hex')],
};

module.exports = {
  keys,
  config,
};
