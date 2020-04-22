const path = require('path');

const { config } = require(path.join(__src, 'config'));

const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const passport = require('passport');

const { google, serialize, deserialize } = require(path.join(__src, 'auth'));

function apply(app) {
  // Bodyparser config
  app.use(bodyParser.json(config.bodyParser.json));
  app.use(bodyParser.urlencoded(config.bodyParser.urlencoded));

  // Security
  app.use(helmet());
  app.use(methodOverride('_method'));
  app.use(methodOverride('X-HTTP-Method-Overide'));
  app.use(cors());

  // Optimization
  app.use(compression());

  // Passport oauth20 google auth
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  passport.use(google.strategy);
}

module.exports = apply;
