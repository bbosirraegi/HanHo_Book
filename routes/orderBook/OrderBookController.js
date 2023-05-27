const express = require('express');
const router = express.Router();
const OrderBookService = require('./OrderBookService');

router.get('/', async function (req, res, next) {
  try {
    res.render('/list');
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async function (req, res, next) {
  try {
    if (req.body) {
      console.log('BODY');
      console.log(req.body);
      res.render('index', { page: 'page/orderbook', detailBook: req.body });
    } else {
      res.render('/list');
    }
  } catch (e) {
    console.log(e);
  }
});

router.post('/orderBook', async function (req, res, next) {
  try {
    const result = await OrderBookService.orderBook(req.body);
    if (result) {
      console.log('DetailBook Controller Success');
    } else {
      console.log('Fail');
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
