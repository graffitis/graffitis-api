const path = require('path');

const Crud = require(path.join(__dirname, 'crud.js'));

const { Post } = require(path.join(__src, 'models'));

const post = Crud(Post);

module.exports = {
  post,
};
