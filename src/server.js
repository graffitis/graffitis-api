global.__src = __dirname;

const path = require('path');
const mongoose = require('mongoose');

const app = require(path.join(__src, 'app.js'));
const { keys, config } = require(path.join(__src, 'config'));

app.listen(config.PORT, () => {
  console.log(`Express server running on 'localhost:${config.PORT}`);
});

mongoose
  .connect(keys.MongoURI, config.mongoose)
  .then(() => console.log('mongoDB connected'));
