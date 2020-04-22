const path = require('path');
const { Strategy } = require('passport-google-oauth20');

const { generate, ensure } = require(path.join(__src, 'token'));
const { User } = require(path.join(__src, 'models'));
const { keys } = require(path.join(__src, 'config'));
const { google } = keys;

const verify = async (accessToken, refreshToken, profile, done) => {
  await User.findOne({ googleId: profile.id })
    .catch((err) => done(err, null))
    .then(async (data) => {
      if (data) {
        // TODO: ugly, refactor whole "ensure" process
        done(null, await ensure(data));
      } else {
        new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          pic: profile._json.picture,
          role: 0,
          token: generate(),
        })
          .save()
          .catch((err) => done(err, null))
          .then((user) => done(null, user));
      }
    });
};

const strategy = new Strategy(
  {
    clientID: google.ID,
    clientSecret: google.secret,
    callbackURL: '/auth/login/callback',
  },
  verify
);

module.exports = {
  Strategy,
  strategy,
};
