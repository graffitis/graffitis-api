const path = require('path');

const { User } = require(path.join(__src, 'models'));
const google = require(path.join(__dirname, 'google.js'));
const roles = require(path.join(__dirname, 'roles.js'));

const serialize = (user, done) => done(null, user._id);
const deserialize = (id, done) => {
  User.findById(id)
    .catch((err) => done(err, null))
    .then((user) => done(null, user));
};

module.exports = {
  google,
  serialize,
  deserialize,
  roles,
};
