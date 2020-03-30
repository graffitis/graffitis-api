const mongoose = require('mongoose');

const user = {
  name: String,
  email: String,
  pic: String,
  desc: String,
  role: Number,
  googleId: String,
};

const schema = mongoose.Schema(user);
const User = mongoose.model('User', schema);

module.exports = {
  schema,
  User,
};
