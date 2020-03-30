const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Api root say hello!' });
});

module.exports = router;
