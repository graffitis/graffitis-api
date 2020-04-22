const passport = require('passport');

const callback = (req, res) => {
  try {
    const { state } = req.query;
    const { redirect } = JSON.parse(Buffer.from(state, 'base64').toString());
    if (typeof redirect === 'string' && redirect.startsWith('/'))
      return res.redirect(redirect);
  } catch (e) {}
  return res.redirect('/me');
};

const login = (req, res, next) => {
  const { redirect } = req.query;
  const state = redirect
    ? Buffer.from(JSON.stringify({ redirect })).toString('base64')
    : undefined;
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state,
  })(req, res, next);
};

module.exports = {
  callback,
  login,
};
