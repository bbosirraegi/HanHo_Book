const express = require('express');
const router = express.Router();
const AddBookService = require('./AddBookService');

router.get('/', function (req, res, netxt) {
  res.render('index', { page: 'page/addBook' });
});

router.post('/add', async function (req, res, next) {
  console.log('HERE');
  console.log(req.body);
  try {
    // Params
    const result = await AddBookService.addBook(req.body);

    console.log('Result');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
