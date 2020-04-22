const path = require('path');
const passport = require('passport');
const { Router } = require('express');

const { auth } = require(path.join(__src, 'controllers'));
const { logout, me } = auth;
const { callback, login } = auth.login;

const router = Router();

router.route('/login').get(login);
router.route('/logout').get(logout);
router.route('/me').get(me);

router
  .route('/login/callback')
  .get(
    passport.authenticate('google', { failureRedirect: '/login' }),
    callback
  );

module.exports = router;
