const express = require('express');
const morgan = require('morgan');
const app = express();
const views = require('./views/main');
const models = require('./models'); // do not need to specify index.js - see answer https://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder
app.use(morgan('dev'));

//app.use('/', views);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use('/user', require('./routes/user'));
app.use('/wiki', require('./routes/wiki'));

app.get('/', (req, res) => {
  res.send(views());
});

models.db.authenticate().then(() => {
  console.log('CONNECTED TO DB');
});

const init = async () => {
  await models.db.sync();
  // await models.User.sync();
  // await models.Page.sync();

  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`APP LISTENING ON ${PORT}`);
  });
};

init();
