const path = require('path');

const { User } = require(path.join(__src, 'models'));
const generate = require(path.join(__dirname, 'generate.js'));

module.exports = async (user) => {
  if (!user.token) {
    await User.updateOne(
      { _id: user._id },
      {
        token: generate(),
      }
    );
  }
  return user;
};
