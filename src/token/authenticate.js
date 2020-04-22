const path = require('path');

const { User } = require(path.join(__src, 'models'));

module.exports = async (req, res, next) => {
  const { token } = req.body;
  const payload = { status: 200 };

  if (token && !req.user) {
    await User.findOne({ token })
      .catch((err) => {
        payload.status = 500;
        payload.err = err;
      })
      .then((data) => {
        if (!data) {
          payload.status = 404;
          payload.err = 'Token not recognized';
          payload.data = token;
        } else req.user = data;
      });
  } else {
    payload.status = 404;
    payload.err = 'Token not in body';
  }

  if (payload.status !== 200) return res.status(payload.status).json(payload);
  return next();
};
