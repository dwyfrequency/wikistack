const express = require('express');
const morgan = require('morgan');
const app = express();
const views = require('./views/main');
const models = require('./models'); // do not need to specify index.js - see answer https://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder
app.use(morgan('dev'));
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');
app.use('/user', userRouter);
app.use('/wiki', wikiRouter);
//app.use('/', views);
const PORT = 1337;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

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

  app.listen(PORT, () => {
    console.log(`APP LISTENING ON ${PORT}`);
  });
};

init();
