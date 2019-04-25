const express = require('express');
const router = express.Router();
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('../views');

router.get('/', (req, res) => {
  res.send(main());
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  const body = req.body;
  res.json(req.body); // res.send and res.json are pretty much the same will render the page with json instead
  //res.send('req stuff');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
