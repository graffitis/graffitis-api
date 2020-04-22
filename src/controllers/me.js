const me = (req, res) => {
  res.json({
    logged: !!req.user,
    data: req.user,
  });
};

module.exports = me;
