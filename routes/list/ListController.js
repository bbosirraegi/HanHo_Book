const express = require('express');
const router = express.Router();
const ListService = require('./ListService');

router.get('/', async function (req, res, next) {
  try {
    if (req.session.user) {
      console.log('Session True');
    } else {
      console.log('Session False');
    }

    const result = await ListService.getList();

    if (result) {
      res.render('index', { page: 'page/list', bookList: result });
    } else {
      console.log('Fail');
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;