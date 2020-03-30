const path = require('path');

const { config } = require(path.join(__src, 'config'));

const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');

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
}

module.exports = apply;
