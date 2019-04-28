const express = require('express');
const router = express.Router();
const models = require('../models');
const { addPage, wikiPage } = require('../views');

router.get('/', (req, res, next) => {
  // retrieve all wiki pages
  // models.Page.
  res.send('got to GET /wiki/');
});

router.post('/', (req, res, next) => {
  // submit a new page to the database
  res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
  // retrieve the "add a page" form
});
// router.get('/', (req, res, next) => {});
// router.get('/', (req, res, next) => {});
module.exports = router;
