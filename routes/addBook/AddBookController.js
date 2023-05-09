const express = require('express');
const router = express.Router();
const AddBookService = require('./AddBookService');

router.get('/', function (req, res, netxt) {
  res.render('index', { page: 'page/addBook' });
});

router.post('/add', async function (req, res, next) {
  try {
    const result = await AddBookService.addBook(req.body);

    // Go to List
    if (result) {
      res.redirect('/list');
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
