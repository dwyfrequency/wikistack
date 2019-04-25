const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');


router.get("/", (req,res) => {
  res.redirect('/');
});

router.post("/", (req, res, next) => {
  res.json(req.body)
  //res.send('req stuff');
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
