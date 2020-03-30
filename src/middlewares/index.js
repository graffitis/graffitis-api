const path = require('path');

const { config } = require(path.join(__src, 'config'));

const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');

function apply(app) {
  // Bodyparser config
  app.use(bodyParser.json(config.bodyParser.json));
  app.use(bodyParser.urlencoded(config.bodyParser.urlencoded));

  // Security
  app.use(helmet());
  app.use(methodOverride('_method'));
  app.use(methodOverride('X-HTTP-Method-Overide'));

  // Optimization
  app.use(compression());
}

module.exports = apply;
