const express = require('express');
const router = express.Router();
const DetailBookService = require('./DetailBookService');

router.get('/:id', async function (req, res, next) {
  try {
    const result = await DetailBookService.detailBook(req.params.id);

    if (result) {
      res.render('index', { page: 'page/detailbook', bookDetail: result });
    } else {
      console.log('Fail');
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
