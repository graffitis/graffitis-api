const path = require('path');

const Crud = require(path.join(__dirname, 'crud.js'));

const { Post, Category } = require(path.join(__src, 'models'));

const post = Crud(Post);
const category = Crud(Category);

module.exports = {
  post,
  category,
};
