const express = require('express');
const router = express.Router();
const SigninService = require('./SigninService');

// 로그인 화면
router.get('/', async (req, res, next) => {
  if (req.session.user) {
    res.redirect('/list');
  }

  res.render('index', { page: 'page/signin' });
});

// 로그인
router.post('/signin', async (req, res, next) => {
  if (!req.session.user) {
    const result = await SigninService.detailUser(req.body);

    // 세션 생성
    if (result) {
      req.session.user = {
        id: result.user_id,
        name: result.user_nm,
        authorized: true,
      };
    }
  }
  res.redirect('/list');
});

// 로그아웃
router.get('/signout', async (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/list');
  } else {
    // 세션 삭제
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
    });
    res.redirect('/list');
  }
  res.redirect('/list');
});

module.exports = router;
