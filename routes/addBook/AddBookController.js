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
      // res.status(200).json({ message: 'AddBook Success' });
      res.redirect('/list');
    } else {
      res.status(404).json({ message: 'AddBook Failed' });
      res.redirect('/list');
    }
  } catch (e) {
    res.status(500).json({ error: 'DatabaseError' });
    res.redirect('/list');
  }
});

module.exports = router;
