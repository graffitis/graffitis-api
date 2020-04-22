const me = (req, res) => {
  const status = req.user ? 200 : 401;
  res.status(status).json({
    status,
    data: req.user,
  });
};

module.exports = me;
