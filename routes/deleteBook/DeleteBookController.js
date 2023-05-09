const express = require('express');
const router = express.Router();
const DeleteBookService = require('./DeleteBookService');

router.post('/delete', async function (req, res, next) {
  try {
    const result = await DeleteBookService.deleteBook(req.body);

    if (result) {
      res.redirect('/list');
    }
  } catch (e) {
    console.log(e);
  }
});
