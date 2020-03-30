const path = require('path');

const { Post } = require(path.join(__dirname, 'post.js'));
const { User } = require(path.join(__dirname, 'user.js'));
const { Category } = require(path.join(__dirname, 'category.js'));

module.exports = {
  Post,
  User,
  Category,
};
