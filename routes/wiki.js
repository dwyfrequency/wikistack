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
  res.json(req.body);
  //res.send('req stuff');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
