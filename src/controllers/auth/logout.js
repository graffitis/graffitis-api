const logout = (req, res) => {
  const { redirect } = req.query;
  req.logout();
  res.redirect(redirect || '/auth/me');
};

module.exports = logout;
