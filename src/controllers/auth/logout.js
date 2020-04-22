const logout = (req, res) => {
  const { redirect } = req.query;
  req.logout();
  res.redirect(redirect || '/me');
};

module.exports = logout;
