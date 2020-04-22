const path = require('path');
const { Router } = require('express');

const { authenticate } = require(path.join(__src, 'token'));
const { auth } = require(path.join(__src, 'controllers'));
const { me } = auth;

const router = Router();

router.route('/me').get(authenticate, me);

module.exports = router;
