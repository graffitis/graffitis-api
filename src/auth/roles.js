const path = require('path');

const OPT = {
  role: 0,
  json: false,
  redirect: '/',
  strict: false,
};

const map = require(path.join(__dirname, 'roles.map.json'));

/**
 * Ensure authentication level
 * @returns {function} Express route middleware
 * @param {object} [parameters={}] Middleware options
 * @param {number} [parameters.role=] Required role
 * @param {boolean} [parameters.strict=] Role required to be strictly equals [true] or just upper level [false]
 * @param {boolean} [parameters.json=] If must redirect to json on failure
 * @param {string} [parameters.redirect=] Redirect route on failure, in !parameters.json
 */
const ensure = (parameters) => (req, res, next) => {
  // Parameters matching
  let opt = parameters;
  if (!opt) opt = {};
  if (!opt.role) opt.role = OPT.role;
  if (!opt.json) opt.json = OPT.json;
  if (!opt.redirect) opt.redirect = OPT.redirect;
  if (!opt.strict) opt.strict = OPT.strict;

  // Auth
  let isAuth = true;
  const { user } = req;
  if (!user) isAuth = false;
  else if (opt.strict && user.role !== opt.role) isAuth = false;
  else if (!opt.strict && user.role < opt.role) isAuth = false;

  // Redirecting
  if (isAuth) next();
  else if (opt.json)
    res.status(403).json({
      message: opt.strict ? 'Required different role' : 'Required higher role',
      role: user ? user.role : undefined,
      requiredRole: opt.role,
    });
  else res.redirect(opt.redirect);
};

module.exports = {
  ensure,
  map,
};
