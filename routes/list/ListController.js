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

const VerifierReport = {
  'Task id': string,
  'User id': string,
  Answer: string,
  Stack: float,
  'Verifier reputation': float,
  Statue: 'Verified',
  Time: float,
};
