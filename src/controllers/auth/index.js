const path = require('path');

const login = require(path.join(__dirname, 'login.js'));
const logout = require(path.join(__dirname, 'logout.js'));
const me = require(path.join(__dirname, 'me.js'));

module.exports = {
  login,
  logout,
  me,
};
