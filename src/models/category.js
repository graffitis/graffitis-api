const mongoose = require('mongoose');

const category = {
  name: String,
  desc: String,
  status: Number,
  created: Date,
  edited: Date,
};

const schema = mongoose.Schema(category);
const Category = mongoose.model('Category', schema);

module.exports = {
  schema,
  Category,
};
