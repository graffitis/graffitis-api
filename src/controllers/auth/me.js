const me = (req, res) => {
  const logged = !!req.user;
  const status = logged ? 200 : 400;
  res.status(status).json({
    logged,
    data: req.user,
  });
};

module.exports = me;
