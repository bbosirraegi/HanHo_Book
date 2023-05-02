const express = requrie('express');
const router = express.Router();
const ListService = require('../List/ListService');
const AddBookService = require('./AddBookService');

router.get('/', function (req, res, netxt) {
  res.render('index', { page: 'page/addbook' });
});

router.post('/addbook', async function (req, res, next) {
  try {
    // Params
    const result = await ListService.getList();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
