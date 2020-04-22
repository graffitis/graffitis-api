const path = require('path');

const login = require(path.join(__dirname, 'login.js'));
const logout = require(path.join(__dirname, 'logout.js'));

module.exports = {
  login,
  logout,
};
