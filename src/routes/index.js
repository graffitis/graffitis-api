const path = require('path');
const { Router } = require('express');

const router = Router();

const auth = require(path.join(__dirname, 'auth.js'));
const buildRoute = require(path.join(__dirname, 'crud.js'));
const { crud } = require(path.join(__src, 'controllers'));
const { post, category } = crud;

router.get('/', (req, res) => {
  res.json({ msg: 'Api root say hello!' });
});

router.use('/post', buildRoute(post));
router.use('/cat', buildRoute(category));

router.use('/auth', auth);

module.exports = router;
