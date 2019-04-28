const express = require('express');
const router = express.Router();
const { Page } = require('../models');
const { addPage, wikiPage } = require('../views');

router.get('/', (req, res, next) => {
  // retrieve all wiki pages

  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  // submit a new page to the database
  const { title, content } = req.body;
  let slug = generateSlug(title);
  const page = new Page({
    title,
    content,
    slug,
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
  res.json(req.body);
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
  // retrieve the "add a page" form
});
// router.get('/', (req, res, next) => {});
// router.get('/', (req, res, next) => {});
module.exports = router;
