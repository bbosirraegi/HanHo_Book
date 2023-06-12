const SignupService = require('./SignupService');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  if (req.session.user) {
    res.redirect('/signin');
  }

  try {
    res.render('index', { page: 'page/signup' });
  } catch (e) {
    console.log(e);
    // Redirect
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const result = SignupService.signUp(req.body);

    if (result) {
      res.redirect('/signin');
    } else {
      res.redirect('/signup');
    }
  } catch (e) {
    console.log(e);
    res.redirect('/signup');
  }
});

module.exports = router;
