const mongoose = require('mongoose');

const post = {
  cover: String,
  title: String,
  desc: String,
  body: String,
  category: String,
  author: String,
  status: Number,
  edited: Date,
  tags: Array,
  created: Date,
  special: Boolean,
  featured: Boolean,
};

const schema = mongoose.Schema(post);
const Post = mongoose.model('Post', schema);

module.exports = {
  schema,
  Post,
};
