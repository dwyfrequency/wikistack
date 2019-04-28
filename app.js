const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');

// Middleware boilerplate
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

// DB Connection
db.authenticate().then(() => {
  console.log('connected to the database');
});

// Middleware for routes
app.use('/wiki', require('./routes/wiki.js'));
app.use('/user', require('./routes/user'));

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

const PORT = 1337;
const init = async () => {
  // syncing models
  await User.sync();
  await Page.sync();

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

init();
